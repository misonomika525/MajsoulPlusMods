/*
	—————————————————————————————————————————————所有角色ID，截止雀魂v0.9.88.w版本——————————————————————————————————————————————————
	|200001:一姬|200002:二阶堂美树|200003:藤田佳奈|200004:三上千织|200005:相原舞|200006:抚子|200007:八木唯|200008:九条璃雨|
	|200009:泽尼娅|200010:卡维|200011:四宫夏生|200012:汪次郎|200013:一之濑空|200014:明智英树|200015:轻库娘|200016:莎拉|
	|200017:二之宫花|200018:白石奈奈|200019:小鸟游雏田|200020:五十岚阳菜|200021:凉宫杏树|200022:约瑟夫|200023:斋藤治|200024:北见纱和子|
	|200025:艾因|200026:雏桃|200027:月见山|200028:藤本绮罗|200029:辉夜姬|200030:如月莲|200031:石原碓海|200032:艾丽莎|
	|200033:寺崎千穗理|200034:宫永咲|200035:原村和|200036:天江衣|200037:宫永照|200038:福姬|200039:七夕|200040:蛇喰梦子|
	|200041:早乙女芽亚里|200042:生志摩妄|200043:桃喰绮罗莉|
*/
const ReplaceCharacterID = 200004; //替换用角色id
const ReplaceSkinID = 400401; //替换用皮肤id，计算方式为：(角色id-200000)*100+400000+第几个皮肤
const HideCharacterIDS = [200042,200001,200002]; //要隐藏的角色id
//移除寮舍角色
const refreshInfo = uiscript.UI_Lobby.prototype.refreshInfo;
uiscript.UI_Lobby.prototype.refreshInfo = function () {
	for (i in uiscript.UI_Sushe.characters) {
		for (j in HideCharacterIDS) {
			if (uiscript.UI_Sushe.characters[i].charid === HideCharacterIDS[j]) {
				uiscript.UI_Sushe.characters.splice(i, 1);
				console.log("id" + HideCharacterIDS[j] + "已经移除");
			}
		}
	}
	return refreshInfo.call(this);
}
//牌局内
const initRoom = view.DesktopMgr.prototype.initRoom;
view.DesktopMgr.prototype.initRoom = function (e, a, s, o, l) {
	a.forEach(v => {
		for (i in HideCharacterIDS) {
			if (v.character.charid === HideCharacterIDS[i]) {
				console.log("id" + v.character.charid + "已经替换");
				v.character.charid = ReplaceCharacterID;
				v.character.skin = ReplaceSkinID;
				v.avatar_id = ReplaceSkinID;
			}
		}
	})
	return initRoom.call(this, e, a, s, o, l);
}
//防心肺停止
const sendReq2Lobby = app.NetAgent.sendReq2Lobby;
app.NetAgent.sendReq2Lobby = function (a, b, c, d) {
	//详细资料
	if (a === "Lobby" && b === "fetchAccountInfo") {
		var d_back = d;
		d = function (i, n) {
			if (i || n.error)
				uiscript.UIMgr.Inst.showNetReqError("fetchAccountInfo", i, n);
			else {
				var a = n.account;
				for (j in HideCharacterIDS)
					if (cfg.item_definition.skin.map_[a.avatar_id].character_id === HideCharacterIDS[j]) {
						console.log("id" + HideCharacterIDS[j] + "已经替换");
						a.avatar_id = ReplaceSkinID;
					}
			}
			return d_back.call(this, i, n);
		}
	}
	//好友信息
	if (a === "Lobby" && b === "fetchFriendList") {
		var d_back = d;
		d = function (e, i) {
			if (e)
				app.Log.log("获取好友列表时发生错误:" + e);
			else if (i.error)
				app.Log.log("获取好友列表时发生错误，错误码：" + i.error.code);
			else {
				i.friends.forEach(v => {
					for (j in HideCharacterIDS)
						if (cfg.item_definition.skin.map_[v.base.avatar_id].character_id === HideCharacterIDS[j]) {
							v.base.avatar_id = ReplaceSkinID;
						}
				})
			}
			return d_back.call(this, e, i);
		}
	}
	return sendReq2Lobby.call(this, a, b, c, d);
}
//好友房
const _refreshPlayerInfo = uiscript.UI_WaitingRoom.prototype._refreshPlayerInfo;
uiscript.UI_WaitingRoom.prototype._refreshPlayerInfo = function (t) {
	for (i in HideCharacterIDS) {
		if (t.character && t.character.charid === HideCharacterIDS[i]) {
			console.log("id" + t.character.charid + "已经替换");
			t.character.charid = ReplaceCharacterID;
			t.character.skin = ReplaceSkinID;
			t.avatar_id = ReplaceSkinID;
		}
	}
	return _refreshPlayerInfo.call(this, t)
}
//最终保险措施，将该人物的所有数据都替换
const load = cfg.load;
cfg.load = function (t) {
	load.call(this, t);
	for (i in HideCharacterIDS){
		console.log(cfg.item_definition.character.map_[HideCharacterIDS[i]]);
		/*
		cfg.item_definition.character.map_[HideCharacterIDS[i]].init_skin = ReplaceSkinID;
		cfg.item_definition.character.map_[HideCharacterIDS[i]].full_fetter_skin = ReplaceSkinID;
		*/
		cfg.item_definition.character.map_[HideCharacterIDS[i]].sound  = cfg.item_definition.character.map_[ReplaceCharacterID].sound;
		cfg.item_definition.character.map_[HideCharacterIDS[i]].emo = "extendRes/emo/" + ReplaceCharacterID;
		for (j in cfg.item_definition.skin.rows_) {
			if (cfg.item_definition.skin.rows_[j].character_id === HideCharacterIDS[i]) {
				cfg.item_definition.skin.rows_[j].full_height = cfg.item_definition.skin.map_[ReplaceSkinID].full_height;
				cfg.item_definition.skin.rows_[j].full_width = cfg.item_definition.skin.map_[ReplaceSkinID].full_width;
				cfg.item_definition.skin.rows_[j].full_x = cfg.item_definition.skin.map_[ReplaceSkinID].full_x;
				cfg.item_definition.skin.rows_[j].full_y = cfg.item_definition.skin.map_[ReplaceSkinID].full_y;
				cfg.item_definition.skin.rows_[j].half_height = cfg.item_definition.skin.map_[ReplaceSkinID].half_height;
				cfg.item_definition.skin.rows_[j].half_width = cfg.item_definition.skin.map_[ReplaceSkinID].half_width;
				cfg.item_definition.skin.rows_[j].half_x = cfg.item_definition.skin.map_[ReplaceSkinID].half_x;
				cfg.item_definition.skin.rows_[j].half_y = cfg.item_definition.skin.map_[ReplaceSkinID].half_y;
				cfg.item_definition.skin.rows_[j].path = cfg.item_definition.skin.map_[ReplaceSkinID].path;
				cfg.item_definition.skin.rows_[j].offset_x = cfg.item_definition.skin.map_[ReplaceSkinID].offset_x;
				cfg.item_definition.skin.rows_[j].offset_y = cfg.item_definition.skin.map_[ReplaceSkinID].offset_y;
				cfg.item_definition.skin.rows_[j].smallhead_width = cfg.item_definition.skin.map_[ReplaceSkinID].smallhead_width;
				cfg.item_definition.skin.rows_[j].smallhead_x = cfg.item_definition.skin.map_[ReplaceSkinID].smallhead_x;
				cfg.item_definition.skin.rows_[j].smallhead_y = cfg.item_definition.skin.map_[ReplaceSkinID].smallhead_y;
				console.log(cfg.item_definition.skin.rows_[j].id + "的数据已经被覆盖。");
			}
		}
	}
}