// Prevents getting kicked for inactivity
var waitheatbeat = setInterval(function() {
    if (this && this.GameMgr && this.GameMgr.Inst && Laya) {
        setInterval(() => {
            this.GameMgr.Inst._pre_mouse_point = new Laya.Point(Math.floor(Math.random() * document.getElementById('layaCanvas').width), Math.floor(Math.random() * document.getElementById('layaCanvas').height));
            document.dispatchEvent(new Event('mousemove'));
        }, 10000);
        clearInterval(waitheatbeat);
    }
}, 1000);