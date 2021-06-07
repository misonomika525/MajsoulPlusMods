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
			  /*↑填写要替换的角色的所有皮肤（只需改动中间二位即可）*/
			player_data.avatar_id = 401401
            /*//↑填写覆盖后显示的角色头像，3-4位为角色编号，5-6位为皮肤编号。角色编号可参考表情资源文件夹的后二位编号。 //福姬*/
			player_data.avatar_frame = 0
			/*//头像框，0为默认头像框*/
            const character = player_data.character
            if (character.charid) {
              const views = character.views
              character.charid = 200014
			  /*//↑覆盖后的角色编号，可参考表情资源文件夹的编号方式*/
              character.extra_emoji = [10, 11, 12, 13]
              character.is_upgraded = true
              character.level = 5
              character.skin = 401401
			  /*↑填写第60行处的数字代码内容*/
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
