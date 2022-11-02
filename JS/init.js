// init ( speed,divid,width,height,callback )
// speed:每次页面刷新间隔,FPS = 1000/speed;
// divid:div的id
// width:页面宽
// height:页面高
// callback：游戏初始化后，调用此函数
init(50,"mycanvas",540,720,main);

function main()
{
	bglayer = new LSprite(); //声明背景层

	//Graphics类包含一组可用来创建矢量形状的方法,画背景,背景是白色
	bglayer.graphics.drawRect(1,"#000000",[0,0,540,720],true,"#FFFFFF");
	
	addChild(bglayer);

	//LLoadManage类是可以用来同时读取图片，文本以及js多种类型的文件。
	//LLoadManage.load ( list  onUpdate  onComplete )
	//list:指定的需要加载数据的数组。
	//onUpdate:加载过程中调用的函数，一般用来显示游戏进度。
	//onComplete: list中全部文件加载完成时调用此函数
	sound = new LSound();
    sound.load("./Sound/Harmonious.mp3");
   
	LLoadManage.load(imgdata,function(progress)
        {
			//loadinglayer.setProgress(progress);//setProgress设置进度条的长度百分比
        },
           
        
        gameinit);//加载完毕进入gameinit函数
}

function gameinit(result)//加载完毕返回result为图片数组，进行游戏刚开始界面
{
	
	imglist = result;
	bglayer.die();//清空所有图形以及事件。
	bglayer.removeAllChild();//删除所有子实例

	sound.addEventListener(LEvent.COMPLETE,function()
	{
		sound.play();
	});

	sound1 = new LSound();
    sound1.load("./Sound/Grad-Erlija.mp3");
	
	// LBitmap 类表示用于表示位图图像的显示对象
	//创建一个具有指定的宽度和高度的 LBitmapData 对象。
	var bitmap = new LBitmap(new LBitmapData(imglist["game"]));
	bglayer.addChild(bitmap);//添加背景图片


    //添加游戏标题文字
	var text = new LBitmap(new LBitmapData(imglist["text"]));
	text.x=150;
	text.y=15;
	bglayer.addChild(text);

    //添加开始按钮
	var bitmap1=new LBitmap(new LBitmapData(imglist["start"]));
	var startbutton=new LButton(bitmap1,bitmap1);
	startbutton.y=600;
	startbutton.x=160;
	bglayer.addChild(startbutton);

    //添加设置按钮
	var bitmap2=new LBitmap(new LBitmapData(imglist["set"]));
	var setbutton=new LButton(bitmap2,bitmap2);
	setbutton.y=10;
	setbutton.x=470;
	bglayer.addChild(setbutton);

	startbutton.addEventListener(LMouseEvent.MOUSE_UP,gamestart);//添加监听器，一旦点击了就进入gamestart开始游戏。
	setbutton.addEventListener(LMouseEvent.MOUSE_UP,gameset);
	
}

function onkeyup(event)
{
	rabbit.movement=0;
	rabbit.changeaction();
}
/*     以上是两个键盘控制器    */









	
	
	
	
	
	
	
	
	
	




	
	
	
	
