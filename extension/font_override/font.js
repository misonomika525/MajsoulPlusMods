(function () {
  const fontMap = {
    fengyu: {
      src: 'url(./majsoul_plus/extension/font_override/fengyu.ttf)',
    },
    hanyi: {
      src: 'url(./majsoul_plus/extension/font_override/hanyi.ttf)',
    },
    haolong: {
      src: 'url(./majsoul_plus/extension/font_override/haolong.otf)',
    },
    youyuan: {
      src: 'local("幼圆")',
    },
    youyuan_bold: {
      src: 'local("幼圆")',
      bold: true,
    },
  };
  let css = '';
  for (let [name, info] of Object.entries(fontMap)) {
    css += `@font-face{font-family:"${name}";src:${info.src};${info.bold ? 'font-weight:bold;' : ''}}\n`
  }
  const style = document.createElement('style');
  style.id = '8q_font_override';
  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);

  const registerBitmapFont = Laya.Text.registerBitmapFont;
  Laya.Text.registerBitmapFont = function (name, font) {
    console.log(name, font)
    if (font !== undefined && fontMap.hasOwnProperty(name)) {
      // font.destroy(); // 直接不销毁了,我相信1202年的电脑配置不会那么差
      font.fontName_8q = name === 'hanyi' ? 'hanyi,haolong' : name; // 汉仪字体缺字，用今昔豪龙补一下
    } else {
      console.log('缺少字体定义:', font, name);
    }
    return registerBitmapFont.call(this, name, font);
  }
  const ctx = document.createElement('canvas').getContext("2d");
  const getCharWidth = Laya.BitmapFont.prototype.getCharWidth;
  Laya.BitmapFont.prototype.getCharWidth = function (chr) {
    if (this.fontName_8q) {
      ctx.font = '40px ' + this.fontName_8q;
      return ctx.measureText(chr).width + this.letterSpacing;
    } else {
      return getCharWidth.call(this, chr);
    }
  }
  const drawText = Laya.BitmapFont.prototype.drawText;
  Laya.BitmapFont.prototype.drawText = function (str, textObj, x, y, align, width) {
    if (this.fontName_8q) {
      const font = '40px ' + this.fontName_8q;
      let textWidth = this.getTextWidth(str),
        left = 0;
      if ('center' === align) left = (width - textWidth) / 2;
      else if ('right' === align) left = width - textWidth;
      for (let index = 0, len = str.length; index < len; index++) {
        textObj.graphics.fillText(str.charAt(index), x + left, y, font, '', 'left');
        left += this.getCharWidth(str.charAt(index));
      }
    } else {
      return drawText.call(this, str, textObj, x, y, align, width);
    }
  }
}());