!function(){
    const inject = function() {
        if (uiscript.UI_PlayerInfo.Inst && uiscript.UI_OtherPlayerInfo.Inst && uiscript.UI_PlayerInfo.Inst.show && uiscript.UI_OtherPlayerInfo.Inst.show && uiscript.UI_PlayerInfo.Inst.detail_data.blocks[0].show && uiscript.UI_OtherPlayerInfo.Inst.detail_data.blocks[0].show && view.ActionHule.play) {
            console.log("Majsoul Helper injected.");
            uiscript.UI_InfoLite.Inst.show("在此敬告您\n您已经开启了挂机脚本\n请确定您是否需要本脚本\n如果不需要请在雀魂P内关闭");
            for (const key in view.DesktopMgr.Inst.actionMap) {
                const action = view.DesktopMgr.Inst.actionMap[key];
                const m = action.method;
                action.method = (e) => {
                    setTimeout(() => analyseOperation(e), 500);
                    return m(e);
                };
            }
        } else setTimeout(inject, 1000);
        // uiscript.UI_GameEnd.prototype.show = () => game.Scene_MJ.Inst.GameEnd();
        // uiscript.UI_PiPeiYuYue.Inst.addMatch(2);
    }
    const analyseOperation = function(e) {
        const action = e.msg;
        if (action.hasOwnProperty("md5")) {
            setTimeout(() => {
                view.DesktopMgr.Inst.setAutoHule(true);
				view.DesktopMgr.Inst.setAutoMoQie(true);
				view.DesktopMgr.Inst.setAutoNoFulu(true);
                uiscript.UIMgr.Inst._ui_desktop.refreshFuncBtnShow(uiscript.UIMgr.Inst._ui_desktop._container_fun.getChildByName("btn_autohu"), 1);
            }, 2000)
        }
    }
    inject();
    console.log("auto hule inited");
}()
