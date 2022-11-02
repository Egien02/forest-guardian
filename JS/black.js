function BlackHole()
{
	
	base(this,LSprite,[]);
	this.bitmap = new LBitmap(new LBitmapData(imglist["hole"]));
	this.addChild(this.bitmap);
	
}
BlackHole.prototype.run=function()
{
	this.y=this.y-stepchange;
};
function addBlack()
{
	var hole=new BlackHole();
	var random=Math.floor(Math.random()*0.5*floorlayer.childList.length);
	
	random=Math.floor(0.5*floorlayer.childList.length)+random;

	hole.y=floorlayer.childList[random].y-45;
	hole.x=floorlayer.childList[random].x+10;
	BlackHolelayer.addChild(hole);
}
