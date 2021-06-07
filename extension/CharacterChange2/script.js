/*// 妄别打啦，作者Handle，修改哈神流风*/
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
			  if(player_data.avatar_id == 400201||player_data.avatar_id == 400202||player_data.avatar_id == 400203||player_data.avatar_id == 400204||player_data.avatar_id == 400205) { 
			  /*检测是否为妄*/
            /*//player_data.avatar_id = 403801 //福姬*/
			player_data.avatar_id = 401101
			/*//一姬，人物头像，3-4位为角色编号，5-6位为皮肤编号*/
			player_data.avatar_frame = 0
			/*//头像框，0为默认头像框*/
            const character = player_data.character
            if (character.charid) {
              const views = character.views
			  /*//character.charid = 200038*/
              character.charid = 200011
              character.extra_emoji = [10, 11, 12, 13]
              character.is_upgraded = true
              character.level = 5
			  /*character.skin = 403801*/
              character.skin = 401101
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
