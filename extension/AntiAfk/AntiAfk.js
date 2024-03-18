// 0.2
// Prevents getting kicked for inactivity
var waitheatbeat = setInterval(function() {
    if (this && this.GameMgr && this.GameMgr.Inst && Laya) {
        Laya.timer.loop(1e3, this.GameMgr, this.GameMgr.Inst.clientHeatBeat)
        clearInterval(waitheatbeat);
    }
}, 1000);
