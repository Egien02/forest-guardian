
function Floor()
{
	base(this,LSprite,[]);
	this.pic();	//将图片赋值后添加到木板数组里
	this.typ=0;//木板类型
	
}
Floor.prototype.run = function()
{
	this.y = this.y-stepchange;//楼梯增长速度
};

Floor.prototype.pic = function(){
}

function Floora() //普通木板 继承floor类
{
	//base(derive,baseSprite,baseArgs)javascript中没有继承，此函数可以实现继承
	// derive:需要继承的类
	// baseSprite:被继承的类
	// baseArgs:传给被继承类的参数
	base(this,Floor,[]);
	this.typ = 1;
}

Floora.prototype.pic = function() 
{
	this.bitmap = new LBitmap(new LBitmapData(imglist["solid"]));
	this.addChild(this.bitmap);
}

function Floorb() //跳跃木板  继承floor
{
	base(this,Floor,[]);
	this.typ = 2;
}

Floorb.prototype.pic = function()
{
	this.bitmap = new LBitmap(new LBitmapData(imglist["spring"]));
	this.addChild(this.bitmap);
}

function Floorc() //移动木板  继承floor
{
	base(this,Floor,[]);
	this.typ = 3;
}

Floorc.prototype.pic = function()
{
	this.bitmap = new LBitmap(new LBitmapData(imglist["r_slide"]));
	this.addChild(this.bitmap);
}

function Floord() //带刺木板  继承floor
{
	base(this,Floor,[]);
	this.typ = 4;
}

Floord.prototype.pic = function()
{
	this.bitmap = new LBitmap(new LBitmapData(imglist["thorn"]));
	this.addChild(this.bitmap);
}

function Floore() //普通木板 继承floor类
{
	base(this,Floor,[]);
	this.typ = 5;
}

Floore.prototype.pic=function() //将图片赋值
{
	this.bitmap = new LBitmap(new LBitmapData(imglist["vanish"]));
	this.addChild(this.bitmap);
}

function addfloor()
{
	var str = [1,2,3,4,5];
	//floor：向下取整
	var random = Math.floor(Math.random()*str.length);//Math.random()返回0~1之间的随机数不包括1.

	if(first)
	{
		newfloor = new Floora();
		newfloor.y = 600;
		newfloor.x = 160;
		floorlayer.addChild(newfloor); 
		first = false;
	}

	var result = str[random];
	if(result == 1){
	    newfloor = new Floora();
	}
	else if(result == 2){
		newfloor = new Floorb();
	}
	else if(result == 3){
		newfloor = new Floorc();
	}
	else if(result == 4){
		newfloor = new Floord();
	}
	else{
		newfloor = new Floore();
	}
	newfloor.y = 700;
	newfloor.x = Math.random()*420;
	floorlayer.addChild(newfloor);   //将地板加上作为floorlayer的子元素

}