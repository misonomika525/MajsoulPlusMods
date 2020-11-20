!function(){
    const inject = function() {
        if (typeof view !== "undefined" && view.DesktopMgr.Inst) {
            console.log("Majsoul Helper injected.");
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
