/*// 本家：你也是🐕，作者Handle。 模板标注Tachibana*/
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
			  if(player_data.account_id != GameMgr.Inst.account_id) { 
			  /*自己的角色不替换*/
			z = 8
			/*↑△：填写替换后的角色编号（表情资源文件夹编号后二位）*/
			x = 1
			/*↑△：填写替换后的角色的皮肤套数。默认为1，契约为2，其他皮肤按发布时间往后从3递增。*/
			y = x + z*100 + 400000
			player_data.avatar_id = y
			player_data.avatar_frame = 0
			/*//头像框，0为默认头像框*/
            const character = player_data.character
            if (character.charid) {
              const views = character.views
			  /*//character.charid = 200038*/
              character.charid = 200001
              character.extra_emoji = [10, 11, 12, 13]
              character.is_upgraded = true
              character.level = 5
			  /*character.skin = 403801*/
              character.skin = 400101
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
