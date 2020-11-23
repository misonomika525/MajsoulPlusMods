var waitemojimutemod = setInterval(function() {
try {
uiscript.UI_DesktopInfo.Inst._player_infos[1].headbtn
uiscript.UI_DesktopInfo.Inst._player_infos[1].headbtn.__proto__.reset = (function () {
    var cacheF = uiscript.UI_DesktopInfo.Inst._player_infos[1].headbtn.__proto__.reset;
    return function () {
        cacheF.apply(this, arguments);
        this.emj_banned = !0;
    };
})();
clearInterval(waitemojimutemod);
}
catch(err) {}
}, 1000);