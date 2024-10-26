const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Mouse,
		C3.Plugins.Touch,
		C3.Plugins.Audio,
		C3.Behaviors.Tween,
		C3.Plugins.Browser,
		C3.Plugins.TiledBg,
		C3.Plugins.Particles,
		C3.Plugins.Arr,
		C3.Plugins.Text,
		C3.Plugins.LocalStorage,
		C3.Plugins.Touch.Cnds.OnTouchObject,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.LocalStorage.Acts.GetItem,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.System.Exps.layoutname,
		C3.Plugins.Audio.Acts.Stop,
		C3.Plugins.Mouse.Cnds.IsOverObject,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Mouse.Acts.SetCursor,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.Sprite.Exps.AnimationName,
		C3.Plugins.Browser.Acts.RequestFullScreen,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.LocalStorage.Acts.SetItem,
		C3.Plugins.Browser.Acts.CancelFullScreen,
		C3.Plugins.Audio.Cnds.IsTagPlaying,
		C3.Plugins.Audio.Acts.PlayByName,
		C3.Plugins.LocalStorage.Cnds.OnItemGet,
		C3.Plugins.LocalStorage.Exps.ItemValue,
		C3.Plugins.Audio.Acts.StopAll,
		C3.Plugins.Browser.Cnds.IsFullscreen,
		C3.Plugins.Sprite.Cnds.IsBoolInstanceVarSet,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.System.Acts.SetGroupActive,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Plugins.System.Exps.uppercase,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Sprite.Acts.SetSize,
		C3.Plugins.Arr.Acts.SetSize,
		C3.Plugins.Sprite.Acts.SetBoolInstanceVar,
		C3.Plugins.System.Acts.SetLayerVisible,
		C3.Plugins.System.Cnds.IsGroupActive,
		C3.Plugins.Particles.Acts.Destroy,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Cnds.While,
		C3.Plugins.Arr.Exps.Width,
		C3.Plugins.System.Exps.tokencount,
		C3.Plugins.System.Exps.random,
		C3.Plugins.Arr.Exps.IndexOf,
		C3.Plugins.Arr.Acts.Push,
		C3.Plugins.Arr.Cnds.CompareSize,
		C3.Plugins.Arr.Cnds.Contains,
		C3.Plugins.System.Cnds.PickNth,
		C3.Plugins.Arr.Exps.At,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Plugins.System.Exps.tokenat,
		C3.Plugins.Sprite.Cnds.IsVisible,
		C3.Behaviors.Tween.Acts.TweenTwoProperties,
		C3.Plugins.Sprite.Exps.IID,
		C3.Plugins.Sprite.Exps.Height,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Exps.zeropad,
		C3.Plugins.Sprite.Acts.SetOpacity,
		C3.Plugins.Sprite.Acts.MoveToLayer,
		C3.Behaviors.Tween.Acts.TweenOneProperty,
		C3.Plugins.Sprite.Exps.X,
		C3.Plugins.Sprite.Exps.Width,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.System.Acts.CreateObject,
		C3.Behaviors.Tween.Cnds.OnTweensFinished,
		C3.Plugins.Sprite.Exps.PickedCount,
		C3.Plugins.System.Cnds.ForEach,
		C3.Behaviors.Tween.Cnds.OnAnyTweensFinished,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Cnds.For,
		C3.Plugins.System.Exps.loopindex,
		C3.Plugins.Text.Acts.TypewriterText,
		C3.Plugins.System.Acts.GoToLayoutByName,
		C3.Plugins.Sprite.Acts.SetScale
	];
};
self.C3_JsPropNameTable = [
	{sevye: 0},
	{btn_bilgi: 0},
	{btn_oyna: 0},
	{girisarkpln: 0},
	{Mouse: 0},
	{Touch: 0},
	{Audio: 0},
	{kolayarkpln: 0},
	{acik: 0},
	{Tween: 0},
	{kart: 0},
	{Browser: 0},
	{TiledBackground: 0},
	{Particles: 0},
	{home: 0},
	{sesa: 0},
	{arr_kartlar: 0},
	{arr_randomID: 0},
	{secimarkpln: 0},
	{orta: 0},
	{kolay: 0},
	{zor: 0},
	{txt_sure: 0},
	{txt_score: 0},
	{dogru_isareti: 0},
	{yanlis_isareti: 0},
	{ynden: 0},
	{ekbuyut: 0},
	{hangi: 0},
	{yonergeses: 0},
	{acilanKartlar: 0},
	{txt_hamleSayisi: 0},
	{bilgiarkpln: 0},
	{kaynkcbt: 0},
	{butonlrbt: 0},
	{nasiloybt: 0},
	{emeggecbt: 0},
	{kapat: 0},
	{nasiloynrarkpln: 0},
	{butonlrarkpln: 0},
	{kaynakcarkpln: 0},
	{emeggecarkpln: 0},
	{LocalStorage: 0},
	{tbrklerekrniarkpln: 0},
	{Text: 0},
	{HOVERS: 0},
	{kart1_id: 0},
	{kart2_id: 0},
	{kart_isimleri: 0},
	{rndS: 0},
	{rndID: 0},
	{sure: 0},
	{dogru_sayisi: 0},
	{esKartSayisi: 0},
	{hamle_sayisi: 0},
	{hangiSeviyedenGeldi: 0},
	{kx: 0},
	{ky: 0}
];

self.InstanceType = {
	btn_bilgi: class extends self.ISpriteInstance {},
	btn_oyna: class extends self.ISpriteInstance {},
	girisarkpln: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	Touch: class extends self.IInstance {},
	Audio: class extends self.IInstance {},
	kolayarkpln: class extends self.ISpriteInstance {},
	kart: class extends self.ISpriteInstance {},
	Browser: class extends self.IInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	Particles: class extends self.IParticlesInstance {},
	home: class extends self.ISpriteInstance {},
	sesa: class extends self.ISpriteInstance {},
	arr_kartlar: class extends self.IArrayInstance {},
	arr_randomID: class extends self.IArrayInstance {},
	secimarkpln: class extends self.ISpriteInstance {},
	orta: class extends self.ISpriteInstance {},
	kolay: class extends self.ISpriteInstance {},
	zor: class extends self.ISpriteInstance {},
	txt_sure: class extends self.ITextInstance {},
	txt_score: class extends self.ITextInstance {},
	dogru_isareti: class extends self.ISpriteInstance {},
	yanlis_isareti: class extends self.ISpriteInstance {},
	ynden: class extends self.ISpriteInstance {},
	ekbuyut: class extends self.ISpriteInstance {},
	yonergeses: class extends self.ISpriteInstance {},
	acilanKartlar: class extends self.IArrayInstance {},
	txt_hamleSayisi: class extends self.ITextInstance {},
	bilgiarkpln: class extends self.ISpriteInstance {},
	kaynkcbt: class extends self.ISpriteInstance {},
	butonlrbt: class extends self.ISpriteInstance {},
	nasiloybt: class extends self.ISpriteInstance {},
	emeggecbt: class extends self.ISpriteInstance {},
	kapat: class extends self.ISpriteInstance {},
	nasiloynrarkpln: class extends self.ISpriteInstance {},
	butonlrarkpln: class extends self.ISpriteInstance {},
	kaynakcarkpln: class extends self.ISpriteInstance {},
	emeggecarkpln: class extends self.ISpriteInstance {},
	LocalStorage: class extends self.IInstance {},
	tbrklerekrniarkpln: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {},
	HOVERS: class extends self.ISpriteInstance {}
}