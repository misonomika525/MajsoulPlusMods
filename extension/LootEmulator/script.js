const LootList = {};
const UpList = {};
const Chance = { //概率
    Characters: 0.05, //角色
    Decoration: 0.15, //装扮
	Gift_purple: 0.05, //紫礼物
	Gift_blue: 0.51, //蓝礼物
    //Gift_green: 0.24, 绿礼物，实际不会使用
    Characters_Up: 0.51, //UP角色共用概率
    Decoration_Up: 0.49 //Up装扮共用概率
}
const AfricaCompensate = true; //是否存在保底
//比较好的随机算法
function randomNum(minNum, maxNum) {
    switch (arguments.length) {
    case 1:
        return parseInt(Math.random() * minNum + 1, 10);
        break;
    case 2:
        return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
        break;
    default:
        return 0;
        break;
    }
}
//获取奖池信息
function getLootList(e) {
    if (!LootList[e]) {
        for (var i in cfg.chest.preview.rows_) {
            var Current_item = cfg.chest.preview.rows_[i];
            if (!Current_item.check_activity || uiscript.UI_Activity.activity_is_running(Current_item.check_activity)) {
                if (!LootList[Current_item.chest_id]) {
                    LootList[Current_item.chest_id] = {
                        Characters: [],
                        Decoration: [],
                        Gift_green: [],
                        Gift_blue: [],
                        Gift_purple: []
                    }
                }
                if (Current_item.type == "chara") {
                    LootList[Current_item.chest_id].Characters.push(Current_item.item_id);
                }
                if (Current_item.type == "skin") {
                    LootList[Current_item.chest_id].Decoration.push(Current_item.item_id);
                }
                if (Current_item.type == "gift") {
                    if (cfg.item_definition.item.map_[Current_item.item_id].sell_reward_count == 1) {
                        LootList[Current_item.chest_id].Gift_green.push(Current_item.item_id);
                    } else if (cfg.item_definition.item.map_[Current_item.item_id].sell_reward_count == 5) {
                        LootList[Current_item.chest_id].Gift_blue.push(Current_item.item_id);
                    } else {
                        LootList[Current_item.chest_id].Gift_purple.push(Current_item.item_id);
                    }
                }
            }
        }
        console.log(LootList);
    }
}
//获取UP信息
function getUpList(e) {
    if (!UpList[e]) {
        var UpGroup = cfg.activity.chest_up.getGroup(uiscript.UI_Activity.onTreasureRateUpRetID(e));
        if (UpGroup) {
            for (GroupIndex in UpGroup) {
                if (!UpList[UpGroup[GroupIndex].chest_id]) {
                    UpList[UpGroup[GroupIndex].chest_id] = {
                        Characters: [],
                        Decoration: []
                    };
                }
                for (ItemIndex in UpGroup[GroupIndex].up_items) {
                    var ItemId = UpGroup[GroupIndex].up_items[ItemIndex];
                    if (cfg.item_definition.item.map_[ItemId] != undefined) {
                        UpList[UpGroup[GroupIndex].chest_id].Decoration.push(ItemId);
                    }
                    if (cfg.item_definition.character.map_[ItemId] != undefined) {
                        UpList[UpGroup[GroupIndex].chest_id].Characters.push(ItemId);
                    }
                }
            }
        }
        console.log(UpList);
    }
}
//模拟抽卡
function getResult(a, i, e) {
    var Africa = true; //给非洲人的保底机制
    for (var j = 0; j < i; j++) {
        var Ran = randomNum(1, 100);
        var ItemId = 200001;
        var IsRepeat_Character = false;
        var IsRepeat_Skin = false;
        ItemId = LootList[e].Gift_green[randomNum(0, LootList[e].Gift_green.length - 1)]
            if (Ran < (Chance.Characters + Chance.Decoration + Chance.Gift_purple + Chance.Gift_blue) * 100) {
                ItemId = LootList[e].Gift_blue[randomNum(0, LootList[e].Gift_blue.length - 1)]
            }
            if (Ran < (Chance.Characters + Chance.Decoration + Chance.Gift_purple) * 100) {
                Africa = false;
                ItemId = LootList[e].Gift_purple[randomNum(0, LootList[e].Gift_purple.length - 1)]
            }
            if (Ran < (Chance.Characters + Chance.Decoration) * 100) {
                if (UpList && UpList[e] && UpList[e].Decoration && UpList[e].Decoration.length > 0 && randomNum(0, 100) < Chance.Decoration_Up * 100) {
                    ItemId = UpList[e].Decoration[randomNum(0, UpList[e].Decoration.length - 1)]
                        //console.log("抽到UP装扮")
                } else {
                    ItemId = LootList[e].Decoration[randomNum(0, LootList[e].Decoration.length - 1)]
                }
                for (var k = 0; k < a.results.length; k++) {
                    if (a.results[k].reward.id == ItemId) {
                        IsRepeat_Skin = true;
                        //console.log("装扮重复了");
                    }
                }
            }
            if (Ran <= Chance.Characters * 100) {
                IsRepeat_Skin = false; //防止出现角色被当装扮的状况
                if (UpList && UpList[e] && UpList[e].Characters && UpList[e].Characters.length > 0 && randomNum(0, 100) < Chance.Characters_Up * 100) {
                    ItemId = UpList[e].Characters[randomNum(0, UpList[e].Characters.length - 1)];
                    //console.log("抽到UP角色")
                } else {
                    ItemId = LootList[e].Characters[randomNum(0, LootList[e].Characters.length - 1)];
                }
                for (var k = 0; k < a.results.length; k++) {
                    if (a.results[k].reward.id == ItemId) {
                        IsRepeat_Character = true;
                        //console.log("角色重复了");
                    }
                }
            }
            //非酋保底
            if (AfricaCompensate && Africa && j == 9) {
                //console.log("恁保底辣，蛤蛤蛤蛤蛤");
                ItemId = LootList[e].Gift_purple[randomNum(0, LootList[e].Gift_purple.length - 1)];
            }
            let reward = {
            reward: {
                id: ItemId,
                count: 1
            }
        }
        //装扮重了，5星石安慰奖
        if (IsRepeat_Skin) {
            reward = {
                reward: {
                    id: ItemId,
                    count: 1
                },
                replace: {
                    id: 302003,
                    count: 5
                }
            }
        }
        //角色重了，75母猪石（？）
        if (IsRepeat_Character) {
            reward = {
                reward: {
                    id: ItemId,
                    count: 1
                },
                replace: {
                    id: 302002,
                    count: 75
                }
            }
        }
        a.results.push(reward);
    }
}
if (game) {
    //Hook 抽卡花费
    let onCreate = uiscript.UI_Treasure.prototype.onCreate
        uiscript.UI_Treasure.prototype.onCreate = function () {
        for (var i in cfg.chest.chest.map_) {
            cfg.chest.chest.map_[i].price = 0;
            cfg.chest.chest.map_[i].price10 = 0;
        }
        return onCreate.call(this);
    }
    //Hook 再抽一次按钮
    let show = uiscript.UI_Tanfang.prototype.show;
    uiscript.UI_Tanfang.prototype.show = function (t, e) {
        uiscript.UI_Tanfang.Inst.final_result.btn_again._clickHandler.method = function () {
            uiscript.UI_Tanfang.Inst.final_result.close();
            var e = uiscript.UI_Tanfang.Inst.chest_id;
            var r = {};
            r.results = [];
            getResult(r, 1, e)
            uiscript.UI_Tanfang.Inst.show(e, r.results)
        }
        return show.call(this, t, e)
    }
	//Hook 抽卡按钮
    uiscript.UI_TanfangRoot.prototype._show = function (e, i, n) {
        var a = this;
        this.beginload(),
        this.loading.visible = !1,
        this.need_show_loading = !0,
        Laya.timer.clearAll(this),
        Laya.timer.once(500, this, function () {
            a.need_show_loading && (a.loading.visible = !0)
        }),
        this.waiting_to_show = !1,
        this.chect_id = e, //猫粮的奇怪拼写？
        //原函数结束
        getLootList(e)
        getUpList(e)
        a.results = []
        getResult(a, i, e)
        a.loadover ? a.show_result() : a.waiting_to_show = !0,
        this.enable = !0;
    }
}
