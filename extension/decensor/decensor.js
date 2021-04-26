// ==UserScript==
// @name         Riichi-Oh: The Story of Riichi
// @namespace    NyaggerSquad
// @icon         https://i.imgur.com/tKWKjza.jpg
// @version      1.0
// @description  You're all free now!
// @author       anon
// @include      https://mahjongsoul.game.yo-star.com/
// @include      https://game.mahjongsoul.com/
// @include      https://game.maj-soul.com/1/
// ==/UserScript==

(function() {
    'use strict';

    const COWARD = false;

    var LazyCheck = setInterval(function(){
        if (GameMgr.prototype.EnterLobby){
            GameMgr.prototype.EnterLobby = (function() {
                var cacheF = GameMgr.prototype.EnterLobby;
                return function(){
                    if (COWARD)
                        app.Taboo.test = (a) => null;
                    else
                        game.Tools.strWithoutForbidden = (a) => a;
                    var result = cacheF.apply(this, arguments);
                    return result;
                };
            })();
            clearInterval(LazyCheck);
        }
    },2000);
})();