// 你们为什么要这样对待男生啊摔
if (game) {
  console.log("男士止步版本 1.1.2")
  ;(() => {
    const sexBlackVar = 2
    const backupFun = game.Scene_MJ.prototype.openMJRoom
    game.Scene_MJ.prototype.openMJRoom = function (...args) {
      try {
        const game_datas = args[0]
        const mode_datas = game_datas.mode

        const player_datas = args[1]
        // console.log(args)
        if (Array.isArray(player_datas)) {
          player_datas.forEach(player_data => {
            if (
              player_data.character &&
              cfg.item_definition.character.map_[player_data.character.charid]
                .sex === sexBlackVar
            ) {
              const allCharactersKeys = Object.keys(
                cfg.item_definition.character.map_
              )
              const noMaleCharacters = allCharactersKeys.reduce((pre, cur) => {
                if (
                  cfg.item_definition.character.map_[cur].sex !== sexBlackVar
                ) {
                  pre[cur] = cfg.item_definition.character.map_[cur]
                }
                return pre
              }, {})
              const noMaleCharactersKeys = Object.keys(noMaleCharacters)
              const randomID =
                noMaleCharactersKeys[
                  parseInt(Math.random() * noMaleCharactersKeys.length)
                ]
              const characterInfo = cfg.item_definition.character.map_[randomID]
              const canMarry = characterInfo.can_marry

              player_data.avatar_id = 400101
              const character = player_data.character
              if (character.charid) {
                // const views = character.views
                character.charid = randomID
                character.extra_emoji = [10, 11, 12, 13]
                character.is_upgraded = true
                character.level = 5
                character.skin = canMarry
                  ? Math.random() > 0.5
                    ? characterInfo.init_skin
                    : characterInfo.full_fetter_skin
                  : characterInfo.init_skin
                player_data.avatar_id = character.skin
              }
            }
          })
        }
        args[1] = player_datas
      } catch (e) {
        // console.warn(e)
      }
      return backupFun.call(this, ...args)
    }
  })()
}
