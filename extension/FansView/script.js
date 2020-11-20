if (game) {
	_show = uiscript.UI_TingPai.prototype._show;
	uiscript.UI_TingPai.prototype._show = function (t, e) {
		var fans = [];
		if (view.DesktopMgr.bianjietishi) {
			for (a = 0; a < this.items.length; a++)
				this.items[a].container.visible = !1;
			t = t.sort(function (t, e) {
					return mjcore.MJPai.Distance(t.tile, e.tile)
				});
			for (var a = 0; a < t.length; a++) {
				var s = t[a].count;
				if (!t[a].yiman) {
					s += view.DesktopMgr.Inst.mainrole.during_liqi;
				}
				fans[a] = !t[a].yiman ? s.toString() + "番" : "役满";
				if (t[a].yiman) {
					this.items[a].container._childs[4]._childs[0].color = "#FFD700";
					this.items[a].container._childs[4]._childs[0].bold = true;
					if (s > 1) {
						this.items[a].container._childs[4]._childs[0].y = 5;
						this.items[a].container._childs[4]._childs[0].fontSize = 20;
						fans[a] = s.toString() + "倍役满";
					}
				} else {
					this.items[a].container._childs[4]._childs[0].color = "#FFFFFF";
					this.items[a].container._childs[4]._childs[0].bold = false;
					this.items[a].container._childs[4]._childs[0].fontSize = 27;
					this.items[a].container._childs[4]._childs[0].y = 1;
				}
				this.items[a].container._childs[4]._childs[0].text = fans[a];
			}
			this.bg.bg.height = 280;
			this.bg.bound.height = 280;
			this.bg.bar.height = 280;
			this.bg.mask.height = 280;
		}
		return _show.call(this, t, e);
	}
}

//抄查水表作业
(function () {
	const injectTingPaiUI = function () {
		if (
			typeof uiscript === 'undefined' ||
			!uiscript.UI_DesktopInfo ||
			typeof ui === 'undefined' ||
			// !ui.mj.desktopInfoUI.uiView ||
			!Laya.View.uiMap['mj/tingpai'] ||
			!Laya.View.uiMap['lobby/friend']) {
			console.log('Majsoul TingPaiUIScript inject failed, Retring.')
			return setTimeout(injectTingPaiUI, 1000)
		}
		console.log('Majsoul TingPaiUIScript injected.');
		//注入听牌ui
		(() => {
			let e = Laya.View.uiMap["mj/tingpai"].child[0].child[2].child;
			let t = {
				type: "Image",
				props: {
					y: 168,
					x: 0,
					width: 82,
					skin: "myres/mjdesktop/bg_3.png",
					name: "fans",
					height: 30
				},
				child: [{
						"type": "Label",
						"props": {
							"y": 1,
							"x": -28,
							"width": 140,
							"text": "0番",
							"height": 28,
							"fontSize": 27,
							"font": "SimHei",
							"color": "#ffffff",
							"align": "center"
						}
					}
				]
			}
			for (var a = 0; a < 14; a++) {
				e[a].child.push(t);
			}
		})();

	}
	injectTingPaiUI()
})()
