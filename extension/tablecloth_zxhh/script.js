const intervalId = setInterval(() => {
  if (cfg.item_definition.item) {
    const item = cfg.item_definition.item.get('305044')
    item.name_chs = '桌布-仲夏花火'
    item.desc_chs = '官方隐藏桌布'
    clearInterval(intervalId)
  }
}, 1000)
;