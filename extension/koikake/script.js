const intervalId = setInterval(() => {
  if (cfg && cfg.item_definition && cfg.item_definition.item) {
    const item = cfg.item_definition.item.get('305044')
    item.name_chs = '恋×シンアイ彼女'
    item.desc_chs = ''
    clearInterval(intervalId)
  }
}, 2000)