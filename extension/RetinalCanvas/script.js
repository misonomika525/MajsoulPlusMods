let debug = false;
let debugResolution = {width:2400,height:1080};
let repeatDelay = 100; //刷新时间(毫米)
let scale = 1;
let getedTanfangAni = false; //是否已经获取过原抽卡动画数据
let fixedBG = false; //是否已修复过室内背景拉伸问题
let originTanfangAnimation1 = [];
let originTanfangAnimation2 = [];
let refreshResolution = function () {
    if (laya.utils.Browser.width / laya.utils.Browser.height > 1.777) {
		if (!debug){
			Laya.stage.width = laya.utils.Browser.width;
			Laya.stage.height = laya.utils.Browser.height;
		}
		else {
			Laya.stage.width = debugResolution.width;
			Laya.stage.height = debugResolution.height;
		}
        scale = getScale();
        fixLobby();
        fixMJ();
		fixSpot();
        optimizationLobby();
		optimizationDesktop();
    } else {
        Laya.stage.width = 1920;
        Laya.stage.height = 1080;
    }
}
//获取比例
let getScale = function () {
    return Laya.stage.width / Laya.stage.height / 1.777;
}
//修正用坐标
let getFixedPosition = function () {
    return (scale * 1920 - 1920) / 2;
}
//修正黑框大小统一方法
let fixedBlackMask = function (blackMask) {
	blackMask.scaleX = 10;
	blackMask.x = - Laya.stage.width;
}
//大厅修正
let fixLobby = function () {
    //背景
    if (game && game.Scene_Lobby && game.Scene_Lobby.Inst && game.Scene_Lobby.Inst.scene && game.Scene_Lobby.Inst.scene._childs && game.Scene_Lobby.Inst.scene._childs[1]
         && game.Scene_Lobby.Inst.scene._childs[1]._childs) { //大厅
        if (game.Scene_Lobby.Inst.scene._childs[1]._childs[1] && game.Scene_Lobby.Inst.scene._childs[1]._childs[1].transform
             && game.Scene_Lobby.Inst.scene._childs[1]._childs[1].transform._worldMatrix && game.Scene_Lobby.Inst.scene._childs[1]._childs[1].transform._worldMatrix.elements) {
            game.Scene_Lobby.Inst.scene._childs[1]._childs[1].transform._worldMatrix.elements[0] = scale * -14.5833;
            game.Scene_Lobby.Inst.scene._childs[1]._childs[1].transform._worldMatrix.elements[5] = scale * 8.45726;
			if (!fixedBG){
				fixedBG = true;
				//提前第一次加载背景以确保加载正常
				game.Scene_Lobby.Inst.bg_front_plane.active = true;
				Laya.timer.once(100,this,function(){game.Scene_Lobby.Inst.bg_front_plane.active = false});
			}
        }
        //室内
        if (game.Scene_Lobby.Inst.scene._childs[1]._childs[0] && game.Scene_Lobby.Inst.scene._childs[1]._childs[0].transform
             && game.Scene_Lobby.Inst.scene._childs[1]._childs[0].transform._worldMatrix && game.Scene_Lobby.Inst.scene._childs[1]._childs[0].transform._worldMatrix.elements) {
            game.Scene_Lobby.Inst.scene._childs[1]._childs[0].transform._worldMatrix.elements[0] = scale * -14.5833;
            game.Scene_Lobby.Inst.scene._childs[1]._childs[0].transform._worldMatrix.elements[5] = scale * 8.45726;
        }
    }
    //黑框（通用）
    if (game && game.Scene_Lobby && game.Scene_Lobby.Inst && game.Scene_Lobby.Inst.scene && game.Scene_Lobby.Inst.scene._childs && game.Scene_Lobby.Inst.scene._childs[2]
         && game.Scene_Lobby.Inst.scene._childs[2].transform && game.Scene_Lobby.Inst.scene._childs[2].transform._worldMatrix && game.Scene_Lobby.Inst.scene._childs[2].transform._worldMatrix.elements) {
        game.Scene_Lobby.Inst.scene._childs[2].transform._worldMatrix.elements[0] = scale * -14.1;
        game.Scene_Lobby.Inst.scene._childs[2].transform._worldMatrix.elements[5] = scale * 7.975;
    }
	//黑框（称号）
	if (uiscript.UI_TitleBook && uiscript.UI_TitleBook.Inst && uiscript.UI_TitleBook.Inst.me){
		fixedBlackMask(uiscript.UI_TitleBook.Inst.me.getChildByName("bmask"));
	}
	//黑框（规则）
	if (uiscript.UI_Rules && uiscript.UI_Rules.Inst && uiscript.UI_Rules.Inst.blackmask){
		fixedBlackMask(uiscript.UI_Rules.Inst.blackmask);
	}
	//黑框（新手引导）
	if (uiscript.UI_XinShouYinDao && uiscript.UI_XinShouYinDao.Inst && uiscript.UI_XinShouYinDao.Inst.blackmask && uiscript.UI_XinShouYinDao.Inst.blackmask){
		fixedBlackMask(uiscript.UI_XinShouYinDao.Inst.blackmask);
	}
	//黑框（匹配成功）
	if (uiscript.UI_PiPeiChengGong && uiscript.UI_PiPeiChengGong.Inst && uiscript.UI_PiPeiChengGong.Inst.blackbg){
		fixedBlackMask(uiscript.UI_PiPeiChengGong.Inst.blackbg);
	}
    //界面偏左问题修正
    if (uiscript.UIMgr && uiscript.UIMgr.Inst && uiscript.UIMgr.Inst._root) {
        uiscript.UIMgr.Inst._root.x = (Laya.stage.width - Laya.stage.height / 18 * 32) / 2;
    }
    //无法点击右方控件修正
    if (uiscript.UI_Lobby && uiscript.UI_Lobby.Inst && uiscript.UI_Lobby.Inst.me) {
        uiscript.UI_Lobby.Inst.me._width = scale * 1920;
    }
    //活动背景
    if (uiscript.UI_Hesu && uiscript.UI_Hesu.Inst && uiscript.UI_Hesu.Inst.bg) {
        uiscript.UI_Hesu.Inst.bg.scaleX = scale;
        uiscript.UI_Hesu.Inst.bg.x = -getFixedPosition();
    }
	//抽卡
	if (uiscript.UI_Tanfang && uiscript.UI_Tanfang.Inst && uiscript.UI_Tanfang.Inst.me){
		let container_scene = uiscript.UI_Tanfang.Inst.me.getChildByName("container_scene");
		container_scene._childs[2].x = -290;
		uiscript.UI_Tanfang.Inst.me.getChildByName("left_tree").scaleX = scale;
		uiscript.UI_Tanfang.Inst.me.getChildByName("right_tree").scaleX = scale;
		uiscript.UI_Tanfang.Inst.me.getChildByName("container_final_info").getChildByName("bg").scaleX = scale;
		//两侧树动画修正
		for (var i = 0; i < uiscript.UI_Tanfang.Inst.me.XMin_new._animationData.nodes[1].frames.x.length; i ++){
			if (!getedTanfangAni){
				originTanfangAnimation1.push(uiscript.UI_Tanfang.Inst.me.XMin_new._animationData.nodes[1].frames.x[i]);
				originTanfangAnimation2.push(uiscript.UI_Tanfang.Inst.me.XMin_new._animationData.nodes[2].frames.x[i]);
				if (i == uiscript.UI_Tanfang.Inst.me.XMin_new._animationData.nodes[1].frames.x.length - 1){
					getedTanfangAni = true;
					console.log(originTanfangAnimation1);
					console.log(originTanfangAnimation2);
				}
			}
			uiscript.UI_Tanfang.Inst.me.XMin_new._animationData.nodes[1].frames.x[i] = originTanfangAnimation1[i] * scale - getFixedPosition();
			uiscript.UI_Tanfang.Inst.me.XMin_new._animationData.nodes[2].frames.x[i] = originTanfangAnimation2[i] * scale - getFixedPosition();
		}
	}
	//创建房间
	if (uiscript.UI_Create_Room && uiscript.UI_Create_Room.Inst && uiscript.UI_Create_Room.Inst.me) {
		let content = uiscript.UI_Create_Room.Inst.me.getChildByName("container_create_room").getChildByName("content");
		let btn_create = content.getChildByName("btn_create");
		let panel = content.getChildByName("panel");
		let scrollbar = content.getChildByName("scrollbar");
		content.scaleX = scale;
		btn_create.scaleX = 1 / scale;
		panel.scaleX = 1 / scale;
		scrollbar.scaleX = 1 / scale;
		uiscript.UI_Create_Room.Inst.me.x = - getFixedPosition();
		uiscript.UI_Create_Room.Inst.me.width = 1920 * scale;
		panel.x = 111 + getFixedPosition() / scale;
	}
}
//麻将桌上修正
let fixMJ = function () {
    //牌谱按钮位置
    if (uiscript.UI_Replay && uiscript.UI_Replay.Inst && uiscript.UI_Replay.Inst.me && uiscript.UI_Replay.Inst.me._childs
         && uiscript.UI_Replay.Inst.me._childs[4] && uiscript.UI_Replay.Inst.me._childs[4]._childs && uiscript.UI_Replay.Inst.me._childs[4]._childs[6]
         && uiscript.UI_Replay.Inst.me._childs[4]._childs[6].clickHandler && uiscript.UI_Replay.Inst.me._childs[4]._childs[6].clickHandler.caller
         && uiscript.UI_Replay.Inst.me._childs[4]._childs[6].clickHandler.caller.__proto__) {
        uiscript.UI_Replay.Inst.me._childs[4]._childs[6].clickHandler.caller.__proto__.switch = function () {
            var t = this,
            e = -258 - getFixedPosition();
            this.me.x < -100 - getFixedPosition() && (e = -5 - getFixedPosition()),
            this._btn_out.disabled = !0,
            Laya.Tween.to(this.me, {
                x: e
            }, 200, Laya.Ease.strongOut, Laya.Handler.create(this, function () {
                    t._btn_out.disabled = !1
                }), 0, !0, !0)
        }
        uiscript.UI_Replay.Inst.me._childs[4]._childs[6].clickHandler.caller.__proto__.reset = function () {
            Laya.Tween.clearAll(this),
            this.me.x = -258 - getFixedPosition(),
            this._btn_out.disabled = !1,
            this._choosed_show_hand.visible = view.DesktopMgr.Inst.record_show_hand,
            this._choosed_show_paopai.visible = view.DesktopMgr.Inst.record_show_paopai,
            this._choosed_show_anim.visible = view.DesktopMgr.Inst.record_show_anim,
            2 & view.DesktopMgr.Inst.paipu_config ? (this._choosed_hide_name.visible = !1, uiscript.UI_Replay.Inst.hide_name = !0, game.Tools.setGrayDisable(this._btn_hide_name, !0)) : (this._choosed_hide_name.visible = !uiscript.UI_Replay.Inst.hide_name, game.Tools.setGrayDisable(this._btn_hide_name, !1))
        }
    }
    //理和鸣切位置
    if (uiscript.UI_DesktopInfo && uiscript.UI_DesktopInfo.Inst && uiscript.UI_DesktopInfo.Inst.me && uiscript.UI_DesktopInfo.Inst.me._childs[12] &&
        uiscript.UI_DesktopInfo.Inst.me._childs[12]._childs[6] && uiscript.UI_DesktopInfo.Inst.me._childs[12]._childs[6].clickHandler) {
        var t = uiscript.UI_DesktopInfo.Inst;
        var e = uiscript.UI_DesktopInfo.Inst.me._childs[12]._childs[6];
        var i = uiscript.UI_DesktopInfo.Inst.me._childs[12]._childs[12];
        e.clickHandler = i.clickHandler = new Laya.Handler(this, function () {
            var i = 0;
            t._container_fun.x < -400 - getFixedPosition() ? (i = -274 - getFixedPosition(), t.arrow.scaleX = 1) : (i = -528 - getFixedPosition(), t.arrow.scaleX = -1),
            Laya.Tween.to(t._container_fun, {
                x: i
            }, 200, Laya.Ease.strongOut, Laya.Handler.create(t, function () {
                    e.disabled = !1
                }), 0, !0, !0),
            e.disabled = !0
        }, null, !1);
    }
    uiscript.UI_DesktopInfo.prototype.resetFunc = function () {
        var t = Laya.LocalStorage.getItem("autolipai"),
        e = !0;
        e = !t || "" == t || "true" == t;
        var i = uiscript.UI_DesktopInfo.Inst._container_fun.getChildByName("btn_autolipai");
        uiscript.UI_DesktopInfo.Inst.refreshFuncBtnShow(i, e),
        Laya.LocalStorage.setItem("autolipai", e ? "true" : "false"),
        view.DesktopMgr.Inst.setAutoLiPai(e);
        var n = uiscript.UI_DesktopInfo.Inst._container_fun.getChildByName("btn_autohu");
        uiscript.UI_DesktopInfo.Inst.refreshFuncBtnShow(n, view.DesktopMgr.Inst.auto_hule);
        var a = uiscript.UI_DesktopInfo.Inst._container_fun.getChildByName("btn_autonoming");
        uiscript.UI_DesktopInfo.Inst.refreshFuncBtnShow(a, view.DesktopMgr.Inst.auto_nofulu);
        var r = uiscript.UI_DesktopInfo.Inst._container_fun.getChildByName("btn_automoqie");
        uiscript.UI_DesktopInfo.Inst.refreshFuncBtnShow(r, view.DesktopMgr.Inst.auto_moqie),
        uiscript.UI_DesktopInfo.Inst._container_fun.x = -528 - getFixedPosition(),
        uiscript.UI_DesktopInfo.Inst.arrow.scaleX = -1
    }
    //黑框大小（流局）
    if (uiscript.UI_Huleshow && uiscript.UI_Huleshow.Inst && uiscript.UI_Huleshow.Inst && uiscript.UI_Huleshow.Inst.black_mask) {
		fixedBlackMask(uiscript.UI_Huleshow.Inst.black_mask);
    }
    //黑框大小（分数结算）
    if (uiscript.UI_ScoreChange && uiscript.UI_ScoreChange.Inst && uiscript.UI_ScoreChange.Inst.me && uiscript.UI_ScoreChange.Inst.me._childs[0] && uiscript.UI_ScoreChange.Inst.me._childs[0].scaleX) {
        fixedBlackMask(uiscript.UI_ScoreChange.Inst.me._childs[0]);
    }
	//黑框大小（终局）
	if (uiscript.UI_GameEnd && uiscript.UI_GameEnd.Inst && uiscript.UI_GameEnd.Inst.me && uiscript.UI_GameEnd.Inst.me.getChildByName("root")){
		fixedBlackMask(uiscript.UI_GameEnd.Inst.me.getChildByName("root").getChildByName("blackmask"));
	}
	//黑框大小（血战特殊和牌）
	if (uiscript.UI_Hu_Xuezhan && uiscript.UI_Hu_Xuezhan.Inst && uiscript.UI_Hu_Xuezhan.Inst.me){
		fixedBlackMask(uiscript.UI_Hu_Xuezhan.Inst.me.getChildByName("black_mask"));
	}
    //表情位置
    if (uiscript.UI_DesktopInfo.Inst && uiscript.UI_DesktopInfo.Inst.block_emo && uiscript.UI_DesktopInfo.Inst.block_emo.me && uiscript.UI_DesktopInfo.Inst.block_emo.me._childs[1]) {
        uiscript.UI_DesktopInfo.Inst.block_emo.me._childs[1]._clickHandler.caller.__proto__.switchShow = function () {
            var t = this,
            e = getFixedPosition();
            e = this.me.x < 1600 + getFixedPosition() ? 1903 + getFixedPosition() : 1382 + getFixedPosition(),
            Laya.Tween.to(this.me, {
                x: e
            }, 200, Laya.Ease.strongOut, Laya.Handler.create(this, function () {
                    t.btn_chat.disabled = !1
                }), 0, !0, !0),
            this.btn_chat.disabled = !0
        }
        uiscript.UI_DesktopInfo.Inst.block_emo.me._childs[1]._clickHandler.caller.__proto__.initRoom = function () {
            var t = view.DesktopMgr.Inst.main_role_character_info,
            e = cfg.item_definition.character.find(t.charid);
            this.emos = [];
            for (i = 0; i < 9; i++)
                this.emos.push({
                    path: e.emo + "/" + i + ".png",
                    sub_id: i
                });
            if (t.extra_emoji)
                for (var i = 0; i < t.extra_emoji.length; i++)
                    this.emos.push({
                        path: e.emo + "/" + t.extra_emoji[i] + ".png",
                        sub_id: t.extra_emoji[i]
                    });
            this.emos = this.emos.sort(function (t, e) {
                return t.sub_id - e.sub_id
            }),
            this.allgray = !1,
            this.scrollbar.reset(),
            this.scrollview.reset(),
            this.scrollview.addItem(this.emos.length),
            this.btn_chat.disabled = !1,
            this.btn_mask.visible = view.DesktopMgr.Inst.emoji_switch,
            "chs" != GameMgr.client_language && (this.me.getChildAt(6).visible = !view.DesktopMgr.Inst.emoji_switch),
            this.me.x = 1903 + getFixedPosition(),
            this.emo_infos = {
                char_id: t.charid,
                emoji: [],
                server: "chs_t" == GameMgr.client_type ? 1 : "jp" == GameMgr.client_type ? 2 : 3
            }
        }
    }

    //修复和牌的各种问题
    if (uiscript && uiscript.UI_Win && uiscript.UI_Win.Inst && uiscript.UI_Win.Inst.me) {
        let root = uiscript.UI_Win.Inst.me.getChildByName("root");
        let bg = root.getChildByName("bg");
        bg.x = bg.y = -500;
        bg.scaleX = bg.scaleY = 1.5;
        root._childs[2].visible = false; //无用mask
		root.getChildByName("container_name").x =  - getFixedPosition();
		root.getChildByName("effect_yiman").y = 595; //y 420
		root.getChildByName("effect_yiman").x = 760; //x 183
		root.getChildByName("effect_yiman2").x = 565;
		root.getChildByName("effect_yiman2").y = 587;
		root.getChildByName("effect_yiman_en").x = 565;
		root.getChildByName("effect_yiman_en").y = 529;
		root.getChildByName("container_score").y = 895;
		root.getChildByName("btn_confirm").x = 1759 + getFixedPosition();
		root.getChildByName("waitingother").x = 1039 + getFixedPosition();
		
    }
}
//传记修复
let fixSpot = function () {
	if (game && game.Scene_Spot && game.Scene_Spot.Inst && game.Scene_Spot.Inst.scene){
		//黑框
		let kuang = game.Scene_Spot.Inst.scene.getChildByName("kuang");
		kuang._transform._worldMatrix.elements[0] = scale * -14.1;
		kuang._transform._worldMatrix.elements[5] = scale * 7.85;
		//背景
		let bg_back = game.Scene_Spot.Inst.scene.getChildByName("root").getChildByName("bg_back");
		bg_back.transform._worldMatrix.elements[0] = scale * -14.5833;
        bg_back.transform._worldMatrix.elements[5] = scale * 8.45726;
	}
	//黑框（转场）
	if (uiscript.UI_Spot_Trans && uiscript.UI_Spot_Trans.Inst && uiscript.UI_Spot_Trans.Inst.bg){
		fixedBlackMask(uiscript.UI_Spot_Trans.Inst.bg);
	}
	//黑框（结束）
	if (uiscript.UI_Spot_End && uiscript.UI_Spot_End.Inst && uiscript.UI_Spot_End.Inst.img){
		uiscript.UI_Spot_End.Inst.img.parent.scaleX = 10;
		uiscript.UI_Spot_End.Inst.img.scaleX = 0.1;
	}
}
//大厅优化
let optimizationLobby = function () {
    //顶部固件
    let fixedX = getFixedPosition();
    if (uiscript.UI_Lobby && uiscript.UI_Lobby.Inst && uiscript.UI_Lobby.Inst.me && uiscript.UI_Lobby.Inst.me.getChildByName("container_top")) {
        let container_top = uiscript.UI_Lobby.Inst.me.getChildByName("container_top");
        container_top.getChildByName("container_name").x =  - fixedX;
        container_top.getChildByName("container_tongbi").x = 744 + fixedX;
        container_top.getChildByName("container_huiyu").x = 1034 + fixedX;
        container_top.getChildByName("btn_rank").x = 1591 + fixedX;
        container_top.getChildByName("btn_info").x = 1723 + fixedX;
        container_top.getChildByName("btn_activity").x = 1440 + fixedX;
        container_top.getChildByName("btn_set").x = 1848 + fixedX;
        container_top.getChildByName("btn_help").x = 1848 + fixedX;
        container_top.getChildByName("btn_xinshouyindao").x = 1848 + fixedX;
        container_top.getChildByName("btn_camera").x = 1848 + fixedX;
        container_top.getChildByName("btn_report").x = 1845 + fixedX;
        container_top.getChildByName("btn_sign").x = 1848 + fixedX;
        container_top.getChildByName("btn_ab_match").x = 1848 + fixedX;
        container_top.getChildByName("btn_achievement").x = 1848 + fixedX;
        container_top.getChildByName("btn_dongri").x = 1848 + fixedX;
        container_top.getChildByName("btn_hesu").x = 1848 + fixedX;
    }
    //底部固件
    if (uiscript.UI_Lobby && uiscript.UI_Lobby.Inst && uiscript.UI_Lobby.Inst.me && uiscript.UI_Lobby.Inst.me.getChildByName("container_btns")) {
        uiscript.UI_Lobby.Inst.me.getChildByName("container_btns").x = -159 + fixedX;
    }
}
//牌桌上优化
let optimizationDesktop = function () {
	//左上右上固件
	if (uiscript.UI_DesktopInfo && uiscript.UI_DesktopInfo.Inst && uiscript.UI_DesktopInfo.Inst.me){
		uiscript.UI_DesktopInfo.Inst.me.getChildByName("container_lefttop").x = -1 - getFixedPosition();
		uiscript.UI_DesktopInfo.Inst.me.getChildByName("container_righttop").x = 1669 + getFixedPosition();
		uiscript.UI_DesktopInfo.Inst._network_delay.me.x = 1828 + getFixedPosition();
	}
	//听牌按钮
	if (uiscript.UI_TingPai.Inst && uiscript.UI_TingPai.Inst && uiscript.UI_TingPai.Inst.btn_show){
		uiscript.UI_TingPai.Inst.btn_show.x = 1875 + getFixedPosition();
	}
	//分数计算后的确认按钮
	if (uiscript.UI_ScoreChange && uiscript.UI_ScoreChange.Inst && uiscript.UI_ScoreChange.Inst.me){
		uiscript.UI_ScoreChange.Inst.btn_confirm.x = 1759 + getFixedPosition();
	}
	//终局右下角按钮
	if (uiscript.UI_GameEnd && uiscript.UI_GameEnd.Inst && uiscript.UI_GameEnd.Inst.me){
		root = uiscript.UI_GameEnd.Inst.me.getChildByName("root");
		root.getChildByName("btn_next").x = 1736 + getFixedPosition();
		root.getChildByName("btn_close").x = 1736 + getFixedPosition();
		root.getChildByName("btn_back").x = 1490 + getFixedPosition();
	}
}
//HookUI来更改固定坐标（暂时无用）
let fixUI = function () {
	
}
setInterval(refreshResolution, repeatDelay)
if (game) {
    //修复点击特效错位
    game.FrontEffect.prototype.bangClickEffect = function () {
        if (game.FrontEffect.Inst._effect_click && !game.FrontEffect.Inst._effect_click.destroyed) {
            var e = Laya.MouseManager.instance.mouseX,
            n = Laya.MouseManager.instance.mouseY;
            (!game.Scene_MJ.Inst.active || uiscript.UI_GameEnd.Inst && uiscript.UI_GameEnd.Inst.enable) && view.AudioMgr.PlayAudio(game.FrontEffect.Inst._click_audio);
            var a = 0,
            r = 0;
            var widthFixed = scale > 1 ? (scale - 1) * 16 : 0;
            Laya.Browser.width / 1920 < Laya.Browser.height / 1080 ? r = (Laya.Browser.height - Laya.Browser.width / 1920 * 1080) / 2 : a = (Laya.Browser.width - Laya.Browser.height / 1080 * 1920) / 2;
            var s = (e / (Laya.Browser.width - 2 * a) * game.FrontEffect.scene_width - game.FrontEffect.scene_width / 2) - widthFixed,
            o = game.FrontEffect.scene_height - n / (Laya.Browser.height - 2 * r) * game.FrontEffect.scene_height - game.FrontEffect.scene_height / 2,
            l = game.FrontEffect.Inst._effect_click.clone();
            game.FrontEffect.Inst._root_click_effect.addChild(l),
            l.active = !1,
            l.active = !0,
            l.transform.localPosition = new Laya.Vector3(s, o, 1),
            Laya.timer.once(1500, game.FrontEffect.Inst, function () {
                l.destroy(!0)
            })
        }
    }
    //修复拖牌错位
    view.ViewPlayer_Me.prototype.getMouseInfo = function () {
        var e = Laya.MouseManager.instance.mouseX,
        i = Laya.MouseManager.instance.mouseY,
        n = 0,
        a = 0;
        Laya.Browser.width / 1920 < Laya.Browser.height / 1080 ? a = (Laya.Browser.height - Laya.Browser.width / 1920 * 1080) / 2 : n = (Laya.Browser.width - Laya.Browser.height / 1080 * 1920) / 2;
        var widthFixed = scale > 1 ? (scale - 1) * 26 : 0;
        var r = e / (Laya.Browser.width - 2 * n) * (view.ViewPlayer_Me.Inst.screen_right - view.ViewPlayer_Me.Inst.screen_left) + view.ViewPlayer_Me.Inst.screen_left - widthFixed,
        s = i / (Laya.Browser.height - 2 * a) * (view.ViewPlayer_Me.Inst.screen_bottom - view.ViewPlayer_Me.Inst.screen_top) + view.ViewPlayer_Me.Inst.screen_top,
        o = Math.floor((r - view.ViewPlayer_Me.Inst.handorigin_x) / view.ViewPlayer_Me.Inst.handwidth);
        o < 0 && (o = 0),
        o >= view.ViewPlayer_Me.Inst.hand.length && (o = view.ViewPlayer_Me.Inst.hand.length - 1);
        var l = null;
        return game.Scene_MJ.Inst.camera_hand.viewportPointToRay(new Laya.Vector2(e, i), view.ViewPlayer_Me.Inst.ray),
        Laya.Physics.rayCast(view.ViewPlayer_Me.Inst.ray, view.ViewPlayer_Me.Inst.rayCastHit, 300),
        view.ViewPlayer_Me.Inst.rayCastHit.sprite3D && (l = view.ViewPlayer_Me.Inst.rayCastHit.sprite3D.getComponentByType(view.HandPaiPlane)), {
            inHandRange: s < view.ViewPlayer_Me.Inst.handrange_top,
            index: o,
            x: r,
            y: s,
            pai: l
        }
    }
}
//以正确的时机加载各种素材
(function () {
    const injectMyres = function () {
        if (
            typeof uiscript === 'undefined' ||
            !uiscript.UI_DesktopInfo ||
            typeof ui === 'undefined' ||
            !Laya.View.uiMap['lobby/create_room'] ||
            !Laya.View.uiMap['lobby/friend']) {
            console.log('RetinalCanvas加载myres图像中')
            return setTimeout(injectMyres, 1000)
        }
        console.log('RetinalCanvas加载myres图像完毕');
        //加载myres图像
        (() => {
            let ress = [
				"myres/mjdesktop/bg_jiesuan.png","chs_t/myres/mjdesktop/bg_jiesuan.png","jp/myres/mjdesktop/bg_jiesuan.png","en/myres/mjdesktop/bg_jiesuan.png",
				"tanfang/left_tree.png","chs_t/tanfang/left_tree.png","jp/tanfang/left_tree.png","en/tanfang/left_tree.png",
				"tanfang/right_tree.png","chs_t/tanfang/right_tree.png","jp/tanfang/right_tree.png","en/tanfang/right_tree.png"
			];
            Laya.loader.load(ress, null, null, "image");
        })();
    }  
    injectMyres()
})()