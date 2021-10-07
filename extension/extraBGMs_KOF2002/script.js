// 扩展 BGM，作者 Handle，部分参考 rin93 的源码
if (!!view && !!uiscript) {
  const musicDir = 'KOF2002/'

  // 正负得点播放不同 BGM
  const _showBackup = uiscript.UI_GameEnd.prototype.show
  uiscript.UI_GameEnd.prototype.show = function () {
    var musicPlayerFlag = false
    view.DesktopMgr.Inst.gameEndResult.players.forEach((player, index) => {
      if (player.seat == view.DesktopMgr.Inst.seat) {
        if (player.total_point >= 0) {
          view.AudioMgr.PlayMusic(musicDir + 'win.mp3')
          musicPlayerFlag = true
        } else {
          view.AudioMgr.PlayMusic(musicDir + 'lose.mp3')
          musicPlayerFlag = true
        }
      }
    })
    if (!musicPlayerFlag) {
      view.AudioMgr.PlayMusic(musicDir + 'win.mp3')
    }
    _showBackup.apply(this, arguments)
  }

  // 不同 UI 注入不同音乐
  const executeUIs = [
    ['UI_Shop', 'show', 'shop.mp3'],
    ['UI_Recharge', 'refresh_info', 'shop.mp3'],
	['UI_Bag', 'show', 'factory.mp3'],
	['UI_Friend', 'show', 'factory.mp3'],
    ['UI_Lobby', 'onEnable', 'lobby.mp3'],
    ['UI_Sushe', 'show_page_select', 'dorm.mp3'],
    ['UI_Treasure', 'refresh_show', 'dorm.mp3'],
    ['UI_Ob', 'show', 'intermission.mp3'],
    ['UI_PaiPu', 'show', 'intermission.mp3'],
    ['UI_Remind', 'onCreate', 'title.mp3'],
  ]
  executeUIs.forEach(([scriptKey, funName, fileName]) => {
    uiscript[scriptKey].prototype[funName] = (() => {
      const functionBackup = uiscript[scriptKey].prototype[funName]
      return function () {
        view.AudioMgr.PlayMusic(musicDir + fileName)
        return functionBackup.apply(this, arguments)
      }
    })()
  })

  let isRefreshPaiLeftHacked = false
  let isFastrecord = false
  let isMyRich = false
  let currentBGM
  let thisTurnBGM
  let benOfTurn
  let richedCount = 0
  let fewPai = false
  const richMusicSet = { count: 0, file: '' }

  // 对默认音乐进行拒绝
  let playing = ''

  view.AudioMgr.PlayMusic = (() => {
    const functionBackup = view.AudioMgr.PlayMusic
    return function (audioDir, i) {
      if (audioDir.includes(musicDir) && !isFastrecord) {
        // console.warn('Playing: ' + audioDir)
        playing = audioDir
        return functionBackup.apply(this, arguments)
      } else {
        functionBackup.apply(this, [playing]) // 继续播放当前曲目
      }
    }
  })()

  // view.AudioMgr.StopMusic = (() => {
  //   var funBackup = view.AudioMgr.StopMusic
  //   return function() {
  //     return (
  //       !new Error().stack.split('\n')[3].match(/anonymous/) &&
  //       funBackup.apply(this, arguments)
  //     )
  //   }
  // })()
  const backupStopmusic = view.AudioMgr.StopMusic
  view.AudioMgr.StopMusic = function () {
    // console.warn(this)
    return backupStopmusic.apply(this, arguments)
  }

  const paiRemain = (number) => {
    return view.DesktopMgr.Inst.left_tile_count <= number
  }
  const playMusic = () => {
    let fileDir = ''
    if (richedCount > 0) {
      // 立直
      if (richMusicSet.count < richedCount) {
        richMusicSet.count = richedCount
        fileDir = (() => {
          if (isMyRich) {
            if (richMusicSet.file.includes('my_rich')) {
              return richMusicSet.file
            }
            return (
              'my_rich' +
              (() => {
                return (Math.random() * 3) >> 0
              })()
            )
          }
          if (richedCount >= 3) {
            richedCount = 3
          }
          let richFile = 'rich' + richedCount
          switch (richedCount) {
            case 1:
            case 2:
              richFile += '-0'
              break
            case 3:
            default:
              richFile += '-0'
              break
          }
          return richFile
        })()
        richMusicSet.file = fileDir
      } else {
        fileDir = richMusicSet.file
      }
    } else if (paiRemain(20)) {
      if (!fewPai) {
        // 余牌少于 20
        fileDir =
          'few' +
          (() => {
            return (Math.random() * 3) >> 0
          })()
        fewPai = fileDir
      } else {
        fileDir = fewPai
      }
    }
    if (!fileDir) {
      currentBGM = thisTurnBGM
    } else {
      currentBGM = fileDir
    }
    currentBGM = `${musicDir}${currentBGM}.mp3`

    if (!isFastrecord && currentBGM && view.DesktopMgr.Inst.gameing) {
      if (richedCount > 0) {
        view.AudioMgr.PlayLiqiBgm(currentBGM)
      } else {
        view.AudioMgr.PlayMusic(currentBGM)
      }
    }
  }
  const newRound = (roundInfo) => {
    // 如果是第一局，hack剩余牌数
    if (!isRefreshPaiLeftHacked && view.DesktopMgr.Inst) {
      isRefreshPaiLeftHacked = true

      const functionBackup = view.DesktopMgr.Inst.RefreshPaiLeft
      view.DesktopMgr.Inst.RefreshPaiLeft = function (...args) {
        if (paiRemain(20)) {
          playMusic()
        }
        return functionBackup.apply(this, args)
      }
    }

    // roundInfo.ju为局数，roundInfo.ben为本场数
    thisTurnBGM = roundInfo.chang * 4 + roundInfo.ju
    if (thisTurnBGM <= 11) {
      thisTurnBGM ++
    }
    benOfTurn = roundInfo.ben
    richedCount = 0
    isMyRich = false
    fewPai = false
    richMusicSet.count = 0
    richMusicSet.file = ''
    playMusic()
  }

  view.ViewPlayer.prototype.AddQiPai = (function () {
    const functionBackup = view.ViewPlayer.prototype.AddQiPai
    return function (r, isRich, y, z) {
      if (isRich) {
        richedCount++
        if (this.container_qipai.player.seat === view.DesktopMgr.Inst.seat) {
          isMyRich |= true
        } else {
          isMyRich |= false
        }
        playMusic()
      }
      return functionBackup.apply(this, arguments)
    }
  })()
  ;['play', 'fastplay', 'record', 'fastrecord'].forEach((key) => {
    const functionBackup = view.ActionNewRound[key]
    view.ActionNewRound[key] = function (...args) {
      isFastrecord = false
      if (key === 'fastrecord') {
        isFastrecord = true
      }
      const resultBackup = functionBackup.apply(this, args)
      newRound(...args)
      return resultBackup
    }
  })

  Object.entries({
    Replay: '_refreshBarshow',
    Live_Broadcast: '_fastSync',
  }).forEach(([key, value]) => {
    uiscript['UI_' + key]['prototype'][value] = (() => {
      const oldFunction = uiscript['UI_' + key]['prototype'][value]
      return function () {
        const resultBackup = oldFunction.apply(this, arguments)
        if (isFastrecord) {
          isFastrecord = false
          playMusic()
        }
        return resultBackup
      }
    })()
  })

  // 注入UI，用于显示UI脚本调用的大概信息
  Object.keys(uiscript).forEach((key) => {
    if (key.startsWith('UI_')) {
      try {
        Object.entries(uiscript[key].prototype).forEach(([k, v]) => {
          uiscript[key].prototype[k] = function (...args) {
            // console.log(key, k, 'At', performance.now(), ...args)
            return v.apply(this, args)
          }
        })
      } catch (e) {
        console.warn(e)
      }
    }
  })

  // 强制干翻立直BGM，作者Handle，v2.0
  const backupFun = view.DesktopMgr.prototype.initRoom
  view.DesktopMgr.prototype.initRoom = function (...args) {
    // console.log(args)
    try {
      const player_datas = args[1]
      if (Array.isArray(player_datas)) {
        player_datas.forEach((player_data) => {
          const views = player_data.views
          if (views && views.length) {
            if (Array.isArray(views)) {
              player_data.views = views.filter((view) => {
                const slot = view.slot
                const id = view.item_id
                return !(slot == game.EView.lizhi_bgm)
              })
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
}
