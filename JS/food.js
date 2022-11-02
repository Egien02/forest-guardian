function food()
{
	base(this,LSprite,[]);
	this.pic();	
	this.typ=0;
}

food.prototype.pic=function(){
}
function fooda() 
{
	base(this,food,[]);
	this.typ=1;
}
fooda.prototype.pic=function()
{
	this.bitmap = new LBitmap(new LBitmapData(imglist["plane"]));
	this.addChild(this.bitmap);
}

function foodb() 
{
	base(this,food,[]);
	this.typ=2;
}
foodb.prototype.pic=function()
{
	this.bitmap = new LBitmap(new LBitmapData(imglist["plane2"]));
	this.addChild(this.bitmap);
}
function foodc() 
{
	base(this,food,[]);
	this.typ=3;
}
foodc.prototype.pic=function()
{
	this.bitmap = new LBitmap(new LBitmapData(imglist["plane3"]));
	this.addChild(this.bitmap);
}


food.prototype.run=function()
{
	this.y=this.y-stepchange;
};


function addfood()
{
	var newfood;
	var str=[1,2,3];
	//floor：向下取整
	var random=Math.floor(Math.random()*str.length);//Math.random()返回0~1之间的随机数不包括1.

	

	var result=str[random];
	if(result==1){
		newfood=new fooda();
		
	}
	else if(result==2){
		newfood=new foodb();
	}
	else if(result==3){
		newfood=new foodc();
	}
	else{
		newfood=new fooda();
	}

	//alert("a");
	
	var random2=Math.floor(Math.random()*0.5*floorlayer.childList.length);//floorlayer.childList子对象列表
	random2=Math.floor(0.5*floorlayer.childList.length)+random2;
	newfood.y=floorlayer.childList[random2].y-45;
	newfood.x=floorlayer.childList[random2].x+10;
	foodlayer.addChild(newfood);
}
