const soundOptions = ['audio','music','lizhi','yuyin','teshuyuyin'];
var soundSettings = {};
var waitaudiomutemod = setInterval(function() {
if (view && view.AudioMgr) {
document.body.onfocus = () => {
	Object.entries(soundSettings).forEach(([k, v]) => {
		view.AudioMgr[k] = v;
		});
}
document.body.onblur = () => {
	soundOptions.forEach((n) => {
		soundSettings[n+'Muted'] = view.AudioMgr[n+'Muted'];
		});
	soundOptions.forEach((n) => {
		view.AudioMgr[n+'Muted'] = true;
		});
}
clearInterval(waitaudiomutemod);
}}, 1000);