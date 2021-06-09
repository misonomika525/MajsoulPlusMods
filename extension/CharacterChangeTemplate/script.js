/*// 本家：妄别打啦，作者Handle，修改哈神流风。 模板标注Tachibana*/
/*// 可以覆盖多个角色，直接复制整个插件副本后修改json内的插件ID和下方内容即可。*/
if (game) {
  /*// ;(() => {
  //   const backupFun = view.DesktopMgr.prototype.initRoom
  //   let playerEffects = []
  //   Object.defineProperty(view.DesktopMgr, 'player_effects', {
  //     get: () => playerEffects,
  //     set: () => {}
  //   })
  //   view.DesktopMgr.player_effects.push({
  //     effect_hupai: 'scene/effect_hupai_default.lh',
  //     effect_liqi: '',
  //     liqibang: 'scene/liqi_default.lh',
  //     hand: 'hand_dog',
  //     liqi_bgm: ''
  //   })
  //   view.DesktopMgr.prototype.initRoom = function (...args) {
  //     try {
  //       const player_datas = args[1]
  //       console.log(args)
  //       if (Array.isArray(player_datas)) {
  //         playerEffects = []
  //         player_datas.forEach(player_data => {
  //           player_data.avatar_id = 401202
  //           const character = player_data.character
  //           if (character) {
  //             const views = character.views
  //             character.charid = 200012
  //             character.extra_emoji = [10, 11, 12, 13]
  //             character.is_upgraded = true
  //             character.level = 5
  //             character.skin = 401202
  //             // character.views = [
  //             //   {
  //             //     item_id: 305023,
  //             //     slot: 2
  //             //   }
  //             // ]
  //           }
  //         })
  //       }
  //       args[1] = player_datas
  //     } catch (e) {
  //       console.warn(e)
  //     }
  //     return backupFun.call(this, ...args)
  //   }
  // })()*/
  (() => {
	 /* //   const backupFun = view.DesktopMgr.prototype.initRoom*/
    const backupFun = game.Scene_MJ.prototype.openMJRoom
    game.Scene_MJ.prototype.openMJRoom = function (...args) {
      try {
        const player_datas = args[1]
        console.log(args)
        if (Array.isArray(player_datas)) {
          player_datas.forEach(player_data => {
			  if(player_data.avatar_id == 400101||player_data.avatar_id == 400102||player_data.avatar_id == 400103||player_data.avatar_id == 400104||player_data.avatar_id == 400105) { 
			  /*↑▲：填写要替换的角色的所有皮肤（仅一个角色的场合只需改动中间二位的角色编号（表情资源文件夹编号后二位）即可）*/
			x = player_data.avatar_id - 400200
			/*↑把▲处的第一个数字末位改成0后填写到此处（「player_data.avatar_id - 」后）*/
			z = 4
			/*↑△：填写替换后的角色编号（表情资源文件夹编号后二位）*/
			if (x>4) {
				x = 4
			}
			/*↑「x>」后和「x=」后这两处，填写△角色的皮肤（包括默认和契约后）总数。*/
			/*如：凉宫杏树现有2套皮肤，则填写的内容为2。*/
			y = x + z*100 + 400000
			player_data.avatar_id = y
			player_data.avatar_frame = 0
            const character = player_data.character
            if (character.charid) {
              const views = character.views
              character.charid = z + 200000
              character.extra_emoji = [10, 11, 12, 13]
              character.is_upgraded = true
              character.level = 5
              character.skin = y
               character.views = [
                 {
                   item_id: 307006,
                   slot: 8
                 }
               ]
            }
          }
		  })
        }
        args[1] = player_datas
      } catch (e) {
        console.warn(e)
      }
      return backupFun.call(this, ...args)
    }
  })()
}
