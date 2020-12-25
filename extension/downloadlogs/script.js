// ==UserScript==
// @name         downloadlogs
// @namespace    reddit
// @icon         https://cdn.myanimelist.net/images/characters/12/75583.jpg
// @version      0.0.2
// @description  download logs for akochan
// @include      https://mahjongsoul.game.yo-star.com/
// @include      https://game.mahjongsoul.com/
// @include      https://majsoul.union-game.com/0/
// ==/UserScript==

(function() {
    //the key we listen for
    //var KEY = 17; //ctrl
    const KEY = 83; //"s"
    const VERBOSELOG = false;

    const TSUMOGIRI = 60; //tenhou tsumogiri symbol

    //listen for key press, modified from anonymizer mod
    function checkscene(scene) {
        return scene && ((scene.Inst && scene.Inst._enable) || (scene._Inst && scene._Inst._enable));
    }

    // GameMgr.Inst.record_uuid becomes populated when we have looked at a log
    document.addEventListener("keydown", function(e) {
        e = e || window.event;
        if ((KEY == e.keyCode || KEY == e.key) && GameMgr.Inst.record_uuid)
            if (checkscene(uiscript.UI_Replay) || checkscene(uiscript.UI_Loading))
                downloadlog();
    });

    //pop-up window for downloading
    function download(filename, text) {
        var element = document.createElement("a");
        element.setAttribute(
            "href",
            "data:text/plain;charset=utf-8," + encodeURIComponent(text)
        );
        element.setAttribute("download", filename);
        element.style.display = "none";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }

    // tenhou's tile encoding:
    //    11-19    - 1-9 man
    //    21-29    - 1-9 pin
    //    31-39    - 1-9 sou
    //    41-47    - ESWN WGR
    //    51,52,53 - red 5 man, pin, sou
    function tm2t(str) {
        //take '2m' and return 2 + 10 etc.
        var num = parseInt(str[0]);
        const pad = { m: 1, p: 2, s: 3, z: 4 };
        return num ? 10 * pad[str[1]] + num : 50 + pad[str[1]];
    }

    //round information, to be reset every RecordNewRound
    var actiontable = [];
    actiontable.init = function(haipais) {
        this.draws = [];
        this.discards = [];
        this.haipais = [];
        haipais.forEach(e => {
            this.draws.push([]);
            this.discards.push([]);
            this.haipais.push(e);
        });
        this.ponedfrom = [];
    };
    //general form of how we dump round informaion
    //NOTE: doras,uras are the indicators
    actiontable.dump = function(uras) {
        var entry = [];
        entry.push(actiontable.round);
        entry.push(actiontable.initscores);
        entry.push(actiontable.doras);
        entry.push(uras);
        actiontable.haipais.forEach((f,i) => {
            entry.push(f);
            entry.push(actiontable.draws[i]);
            entry.push(actiontable.discards[i]);
        });

        return entry;
    }

    function relativeseating(seat0, seat1, dim) {
        //take two seats, return 0 if seat1 is kamicha,
        //  1 if seat 1 is toimen, 2 if shimocha realative to seat0
        //used in generating call symbols, extra +dim b/c .js
        return (seat0 - seat1 + dim - 1) % dim;
    }

    function parse(record) {
        var res = {};
        res["ver"] = "2.3"; // mlog version number
        res["ref"] = record.head.uuid; // game id

        var ruledisp = "";
        if (record.head.config.meta.mode_id) //normal room
            ruledisp = cfg.desktop.matchmode.map_[record.head.config.meta.mode_id].room_name_en;
        else if (record.head.config.meta.room_id) //friendly
            ruledisp = "Friendly";
        else if (record.head.config.meta.contest_uid)//tourney
            ruledisp = "Tournament";
        if (1 == record.head.config.mode.mode)
            ruledisp += " East";
        else if (2 == record.head.config.mode.mode)
            ruledisp += " South";
        if (! record.head.config.meta.mode_id && ! record.head.config.mode.detail_rule.dora_count)
        {
            ruledisp += " Aka Nashi";
            res["rule"] = {"disp":ruledisp, "aka53" : 0, "aka52" : 0, "aka51": 0};
        }
        else
            res["rule"] = {"disp":ruledisp, "aka53" : 1, "aka52" : 1, "aka51": 1};
        //NOTE: this works fine for anonymous logs :^)
        res["dan"]  = record.head.accounts.map(e => cfg.level_definition.level_definition.map_[e.level.id].full_name_en);
        res["title"] = [
            record.head.config.category, //dummy entries
            record.head.config.meta.mode_id //
        ];
        res["name"] = record.head.accounts.map(e => e.nickname);
        //scores: doing points and change in rankpoints. it probably
        //should be oka,uma'd points. w/e
        res["sc"] = record.head.result.players
            .map(e => [e.part_point_1, e.grading_score])
            .flat();
        //game record
        res["mjshead"] = record.head;
        res["mjslog"] = net.MessageWrapper.decodeMessage(
            record.data).records.map(e => net.MessageWrapper.decodeMessage(e));
        //make the constructor names available in json output
        res["mjsrecordtypes"] = res.mjslog.map(e => e.constructor.name);
        //convert to tenhou log
        var nplayers = res.name.length;
        var log = [];
        res["log"] = res.mjslog.forEach((e, leafidx) => {
            switch (e.constructor.name) {
                case "RecordNewRound": {
                    //TODO: move everything into init, or nothing..
                    actiontable.init(
                    //get haipais, this way should handle >sanma
                    res.name.map((f, i) => e["tiles" + i].map(g => tm2t(g)))
                    );
                            //           kyoku,                      honba, riichi sticks
                    actiontable.round = [ nplayers * e.chang + e.ju, e.ben, e.liqibang ];
                    actiontable.initscores = e.scores; //scores at the beginning of the round
                    //treat the last tile in the dealer's hand as a drawn tile
                    actiontable.poppedtile = actiontable.haipais[e.ju].pop();
                    actiontable.draws[e.ju].push(actiontable.poppedtile);
                    actiontable.dealerseat = e.ju;
                    actiontable.doras = e.doras.map(f => tm2t(f));
                    return;
                }
                case "RecordDiscardTile": {
                    //sometimes we get dora passed here
                    if (e.doras && e.doras.length > actiontable.doras.length)
                        actiontable.doras = e.doras.map(f => tm2t(f));

                    //record the discard, pre-pending 'r' with riichi
                    var symbol = e.moqie ? TSUMOGIRI : tm2t(e.tile);
                    if (e.seat == actiontable.dealerseat
                        && !actiontable.discards[e.seat].length && symbol == actiontable.poppedtile)
                        symbol = TSUMOGIRI;
                    actiontable.discards[e.seat].push(
                        e.is_liqi ? "r" + symbol : symbol);

                    actiontable.lastdiscardseat = e.seat; //for ron, pon etc.
                    return;
                }
                case "RecordDealTile": {
                    //after kan this gets passed the new dora
                    if (e.doras && e.doras.length > actiontable.doras.length)
                        actiontable.doras = e.doras.map(f => tm2t(f));

                    actiontable.draws[e.seat].push(tm2t(e.tile));

                    return;
                }
                case "RecordChiPengGang": {
                    //we have a call
                    //TODO: clean this up/simplify
                    switch (e.type) {
                        case 0: {
                        //chii
                            actiontable.draws[e.seat].push(
                                "c" +
                                tm2t(e.tiles[2]) +
                                tm2t(e.tiles[0]) +
                                tm2t(e.tiles[1])
                            );
                            return;
                        }
                        case 1: {
                            //pon
                            var worktiles = e.tiles.map(f => tm2t(f));
                            var idx = relativeseating(
                                e.seat,
                                actiontable.lastdiscardseat,
                                nplayers
                            );
                            worktiles.splice(idx, 0, "p");
                            actiontable.draws[e.seat].push(worktiles.join(""));
                            //save idx for shouminkan
                            actiontable.ponedfrom[e.tiles[0]] = idx;
                            return;
                        }
                        case 2: {
                            ///////////////////////////////////////////////////
                            // kan naki:
                            //   daiminkan:
                            //     kamicha   "m39393939" (0)
                            //     toimen    "39m393939" (1)
                            //     shimocha  "222222m22" (3)
                            //     (writes to draws; 0 to discards)
                            //   shouminkan: (same as pon)
                            //     kamicha   "k37373737" (0)
                            //     toimen    "31k313131" (1)
                            //     shimocha  "3737k3737" (2)
                            //     (writes to discards)
                            //   ankan:
                            //     "121212a12" (3)
                            //     (writes to discards)
                            ///////////////////////////////////////////////////
                            //daiminkan
                            var calltiles = e.tiles.map(f => tm2t(f));
                            // < kamicha 0 | toimen 1 | shimocha 3 >
                            var idx = relativeseating(
                                e.seat,
                                actiontable.lastdiscardseat,
                                nplayers
                            );
                            calltiles.splice( 2 == idx ? 3 : idx, 0, "m");
                            actiontable.draws[e.seat].push(calltiles.join(""));
                            //tenhou drops a 0 in discards for this
                            actiontable.discards[e.seat].push(0);
                            return;
                        }
                        default:
                            console.log(
                                "didn't know what to do with " +
                                e.constructor.name + "(" + leafidx + ")"
                            );
                            return;
                    }
                }
                case "RecordAnGangAddGang" : {
                    //keyletter is 'k' for shouminkan, 'a' for ankan
                    var callstr;
                    var offset = 0;
                    switch (e.type) {
                        case 3: {//ankan
                            callstr = "a";
                            offset = 3;
                            //actiontable.lastdiscardseat = e.seat;
                            break;
                        }
                        case 2:  {//shouminkan
                            callstr = "k";
                            offset = actiontable.ponedfrom[e.tiles];
                            break;
                        }
                        default: {
                            console.log("didn't know what to do with "
                                + e.constructor.name + " type: " + e.type);
                            return;
                        }
                    }
                    //NOTE: e.tiles is a single tile here
                    var til = tm2t(e.tiles);
                    var calltiles = [til, til, til, til];// e.tiles.map(f => tm2t(f));
                    calltiles.splice(offset, 0, callstr);//convient case of them matching
                        //relativeseating(
                        //    e.seat,
                        //    actiontable.lastdiscardseat,
                        //    res.name.length, 0, callstr );
                    //NOTE: this maps to discards unlike normal calls
                    actiontable.discards[e.seat].push(calltiles.join(""));

                    return;
                }
                /////////////////////////////////////////////////////
                // round enders:
                // "RecordNoTile" - ryuukoku
                // "RecordHule"   - agari - ron/tsumo
                // "RecordLiuJu"  - abortion
                //////////////////////////////////////////////////////
                case "RecordLiuJu" : {
                    //abortion: only have checked 9-terminal..
                    var entry = actiontable.dump([]);
                    //TODO: find the types for aborts other than kyushukyuhai
                    if (1 == e.type)
                        entry.push(["九種九牌"]); //kyushukyuhai
                    else //assuming this for now
                        entry.push(["四家立直"]); //4 riichi

                    log.push(entry);
                    return;
                }
                case "RecordNoTile" : {
                    //ryuukoku
                    var entry = actiontable.dump([]);
                    entry.push(["流局", (e.scores && e.scores[0] && e.scores[0].delta_scores && e.scores[0].delta_scores.length) ? e.scores[0].delta_scores : [...new Array(nplayers)].map(()=>0.)]); //ryuukoku
                    log.push(entry);
                    return;
                }
                case "RecordHule": {
                    //agari is all in one list
                    //TODO: don't show fu for limit hands maybe?
                    var agari = [];
                    var ura = [];
                    e.hules.forEach( f => {
                        if (ura.length < (f.li_doras ? f.li_doras.length : 0))
                            ura = f.li_doras.map(g => tm2t(g));
                        agari.push(e.delta_scores); //TODO: split scores
                        //tenhou log viewer requires 点, 飜 to end strings
                        agari.push([
                            f.seat, f.zimo ? f.seat : actiontable.lastdiscardseat, f.seat,
                            //(f.zimo ? "Tsumo "+f.point_zimo_qin +" / "+f.point_zimo_xian : "Ron "+f.point_rong)+"点",
                            f.fu + "符"+ f.count  + "飜" + f.point_sum + "点",
                            f.fans.map(g => cfg.fan.fan.map_[g.id].name_en + "("+ g.val + "飜)")
                            ].flat()); //flatten han
                    });
                    var entry = actiontable.dump(ura);
                    entry.push( ["和了"].concat(agari) );

                    log.push(entry);
                    return;
                }
                default:
                    console.log(
                        "didn't know what to do with " + e.constructor.name + "(" + leafidx + ")"
                    );
                    return;
            }
        });
        res["log"] = log;
        //clean up the output
        if (! VERBOSELOG)
        {
            delete res["mjslog"];
            delete res["mjshead"];
            delete res["mjsrecordtypes"];
        }
        return res;
    }

    function downloadlog() {
        app.NetAgent.sendReq2Lobby(
            "Lobby", "fetchGameRecord",
            { game_uuid: GameMgr.Inst.record_uuid },
            function(i, record) {
                download(GameMgr.Inst.record_uuid + ".json",
                    JSON.stringify(parse(record))
                );
            }
        );
    }
})();

//TODO: fix double ron scores, delta point arrays should be split - too much effort
//TODO: show limit hands with "Mangan" etc. instead of fu/han
//TODO: currently ignoring RecordBaBei - kita/dorara?
//TODO: show abortive draws properly
// vim: ts=4  et
