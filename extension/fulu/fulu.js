(function () {
  const alpha = 76 // alpha 值，取值范围 [0, 255] 只能取整数
  const images = {}
  const recreateResource = Laya.Texture2D.prototype.recreateResource
  Laya.Texture2D.prototype.recreateResource = function (...args) {
    if (this.src && this.src.includes("scene/Assets/Resource/mjpai/") && !this.src.endsWith("/hand.png") && !images[this.src]) images[this.src] = this._image
    if (this['8q_fulu_sign']) {
      const pixels = this._pixels, width = this._width, faceWidth = .65 * width, backColor = [pixels[0], pixels[1], pixels[2], alpha]
      for (let i = 0; i < pixels.length; i += 4) {
        if ((i / 4) % width > faceWidth) {
          [pixels[i], pixels[i + 1], pixels[i + 2], pixels[i + 3]] = backColor
        } else {
          pixels[i + 3] = Math.min(alpha + ((pixels[i] - 223) ** 2 + (pixels[i + 1] - 223) ** 2 + (pixels[i + 2] - 220) ** 2) / 256, 255)
        }
      }
    }
    return recreateResource.call(this, ...args)
  }
  const textures = {}
  view.Block_QiPai.prototype.QiPaiNoPass = function () {
    if (this.last_pai) {
      this.last_pai['8q_fulu_sign'] = true
      const material = this.last_pai.model.meshRender.sharedMaterial
      material.cull = Laya.BaseMaterial.CULL_NONE
      material.blend = Laya.BaseMaterial.BLEND_ENABLE_SEPERATE
      const src = material.getTexture(1).src
      let texture = textures[src]
      if (!texture) {
        texture = textures[src] = new Laya.Texture2D(true, material._repeat, material._format, material._mipmap)
        texture['8q_fulu_sign'] = true
        texture._setUrl(src)
        texture.onAsynLoaded(src, images[src], undefined)
        images[src] = null
      }
      material.setTexture(1, texture)
      // 如果希望立直牌被鸣走后，下一张牌也横过来，就取消下面两行注释
      //const last_is_liqi = this.last_is_liqi
      this.QiPaiPass()
      //this.last_is_liqi = last_is_liqi
    }
  }
  view.DesktopMgr.prototype.getPaiLeft = function (val) { // 因为被鸣的牌没有被移除，所以算剩余牌会把它也算进去
    let cnt = 0
    for (let i = 0; i < 4; i++) {
      const player = this.players[i]
      for (let pai of player.container_babei.pais) {
        if (mjcore.MJPai.Distance(pai.val, val) == 0) cnt++
      }
      for (let pai of player.container_ming.pais) {
        if (mjcore.MJPai.Distance(pai.val, val) == 0) cnt++
      }
      for (let pai of player.container_qipai.pais) {
        if (!pai['8q_fulu_sign']) { // dirty fix, TODO: refactor
          if (mjcore.MJPai.Distance(pai.val, val) == 0) cnt++
        }
      }
      if (player.container_qipai.last_pai && mjcore.MJPai.Distance(player.container_qipai.last_pai.val, val) == 0) cnt++
    }
    for (let pai of this.mainrole.hand) {
      if (mjcore.MJPai.Distance(pai.val, val) == 0) cnt++
    }
    for (let paiVal of this.dora) {
      if (paiVal && mjcore.MJPai.Distance(paiVal, val) == 0) cnt++
    }
    const left = 4 - cnt
    return left < 0 ? 0 : left > 4 ? 4 : left
  }
}())
