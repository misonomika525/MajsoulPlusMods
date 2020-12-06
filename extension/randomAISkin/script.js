// 随机电脑角色
if (game) {
  let players = [0, 0, 0, 0];
  players.get = function () {
    for (let i = 0; i < 3; i++) {
      let value = this.shift();
      if (value > 1) {
        return value;
      }
    }
    return getSkin();
  }

  function getSkin() {
    let index = Math.random() * (cfg.item_definition.skin.rows_.length - 2) >> 0;
    return cfg.item_definition.skin.rows_[index + 2].id;
  }

  const openMJRoom = game.Scene_MJ.prototype.openMJRoom
  game.Scene_MJ.prototype.openMJRoom = function (...args) {
    args[1].forEach(player => {
      if (!player.account_id) {
        player.avatar_id = players.get();
        player.character.charid = cfg.item_definition.skin.map_[player.avatar_id].character_id;
        player.character.level = 5;
        player.character.skin = player.avatar_id;
        player.nickname = cfg.item_definition.character.map_[player.character.charid]["name_chs"]
      }
    });
    return openMJRoom.call(this, ...args)
  }

  const _refreshPlayerInfo = uiscript.UI_WaitingRoom.prototype._refreshPlayerInfo
  uiscript.UI_WaitingRoom.prototype._refreshPlayerInfo = function (t) {
    if (t.account_id === 0 && players[t.cell_index] === 0) {
      console.log(t);
      players[t.cell_index] = t.avatar_id = getSkin();
      t.nickname = cfg.item_definition.character.map_[cfg.item_definition.skin.map_[t.avatar_id].character_id]["name_chs"]
    }
    return _refreshPlayerInfo.call(this, t)
  }

  const _clearCell = uiscript.UI_WaitingRoom.prototype._clearCell
  uiscript.UI_WaitingRoom.prototype._clearCell = function (t) {
    players[t] = 0;
    return _clearCell.call(this, t)
  }
  console.log("随机电脑皮肤启动成功");
}