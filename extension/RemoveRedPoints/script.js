//以正确的时机加载各种素材
(function () {
    const injectMyres = function () {
        if (
            typeof uiscript === 'undefined' ||
            !uiscript.UI_DesktopInfo ||
            typeof ui === 'undefined' ||
            !Laya.View.uiMap['lobby/create_room'] ||
            !Laya.View.uiMap['lobby/friend']) {
            console.log('RemoveRedPoints加载myres图像中')
            return setTimeout(injectMyres, 1000)
        }
        console.log('RemoveRedPoints加载myres图像完毕');
        //加载myres图像
        (() => {
            let ress = [
                "myres/sushe/redpoint.png", "myres/lobby/redpoint.png", "chs_t/myres/sushe/redpoint.png", "chs_t/myres/lobby/redpoint.png", "en/myres/sushe/redpoint.png", "en/myres/lobby/redpoint.png", "jp/myres/sushe/redpoint.png", "jp/myres/lobby/redpoint.png"
            ];
            Laya.loader.load(ress, null, null, "image");
        })();
    }
    injectMyres()
})()
