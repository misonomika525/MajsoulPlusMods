// ==UserScript==
// @name         Party Time
// @namespace    NyaggerSquad
// @icon         https://i.imgur.com/CXj6fxh.png
// @version      0.9
// @description  Everyone's invited. Press Ctrl+C during a match to get a link to the game. Anyone with the script can use that url to spectate.
// @author       anon
// @include      https://mahjongsoul.game.yo-star.com/
// @include      https://game.mahjongsoul.com/
// @include      https://game.maj-soul.com/1/
// ==/UserScript==

(function() {
    'use strict';
    let spec = localStorage.getItem("_pre_spec");

    document.addEventListener('keydown', e => {
        if (e.code === 'KeyC' && e.ctrlKey){
            let uuid = GameMgr.Inst.mj_game_uuid;
            if (!uuid)
                return;
            //window.location is https://localhost:8887/ on my mjs+ (which should actually work if mjs+ is running)
            //GameMgr.Inst.link_url is https://mahjongsoul.game.yo-star.com/ for the US servers but should work for the others
            //navigator.clipboard.writeText(window.location + "?spec="+uuid);
            navigator.clipboard.writeText(GameMgr.Inst.link_url + "?spec="+uuid);
            uiscript.UI_Popout.PopOutNoTitle("观战链接已复制。",null);
        }
    });

    function spectateUUID(uuid){
        localStorage.removeItem("_pre_spec");
        uiscript.UI_Live_Broadcast.fetchInfo(uuid, Laya.Handler.create(uiscript.UI_Friend.Inst, function(e) {
            e.success && uiscript.UI_Friend.Inst.close(Laya.Handler.create(uiscript.UI_Friend.Inst, function() {
                let plist = e.data.live_head.players;
                uiscript.UI_Live_Broadcast.goToWatch(uuid, e.data, plist[Math.floor(Math.random() * plist.length)].account_id)
            }))
        }, null, !1))
    }

    function read_otherpaipu(){
        let link = uiscript.UI_PaiPu.Inst.pop_otherpaipu.input.text.split('?spec=');
        if (!link || !(link = link[link.length - 1]))
            return;
        spec = link;
        return;
    }

    function check_helper(u){
        return u && u.UI_Lobby && u.UI_Lobby.Inst && u.UI_Lobby.Inst.pending_lobby_jump;
    }

    var LazyCheck = setInterval(function(){
        if (check_helper(uiscript)){
            uiscript.UI_Lobby.Inst.pending_lobby_jump = (function(){
                var cacheF = uiscript.UI_Lobby.Inst.pending_lobby_jump;
                return function(){
                    var result = cacheF.apply(this, arguments);
                    if (typeof spec !== 'undefined' && spec !== null){
                        spectateUUID(spec);
                    }
                    return result;
                };
            })();
            clearInterval(LazyCheck);
        }
    },2000);


    var PaipuCheck = setInterval(function(){
        if (uiscript && uiscript.UI_PaiPu && uiscript.UI_PaiPu.Inst && uiscript.UI_PaiPu.Inst.pop_otherpaipu && uiscript.UI_PaiPu.Inst.pop_otherpaipu){
            uiscript.UI_PaiPu.Inst.pop_otherpaipu.hide = (function(){
                var cacheF = uiscript.UI_PaiPu.Inst.pop_otherpaipu.hide;
                return function(){
                    var result = cacheF.apply(this, arguments);
                    read_otherpaipu();
                    if (typeof spec !== 'undefined' && spec !== null){
                        spectateUUID(spec);
                    }
                    return result;
                };
            })();
            clearInterval(PaipuCheck);
        }
    },4000);

})();
