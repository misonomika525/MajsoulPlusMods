const intervalId = setInterval(() => {
  if (cfg && cfg.item_definition && cfg.item_definition.item) {
    const item = cfg.item_definition.item.get('305044')
    item.name_chs = '桌布-赛间小憩'
    item.desc_chs = '赛间小憩，守护这默契的安静吧。\n（没有什么装扮是强行提取资源然后替换默认所无法解决的。）'
    clearInterval(intervalId)
  }
}, 2000)