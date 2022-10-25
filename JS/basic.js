function gameset()//游戏设置界面
{
	bglayer.die();
	bglayer.removeAllChild();
	var bitmap = new LBitmap(new LBitmapData(imglist["game"]));
	bglayer.addChild(bitmap);

    //LTextField 类的方法允许您设置、选择并操作在创作过程中或运行时创建的动态或输入文本字段中的文本。
	var back = new LTextField();
	back.x = 10;
	back.y = 20;
	back.size = 30;
	back.color = "#000000";
	back.text = "<< 返回界面";
	bglayer.addChild(back);

    //声音按钮
	var sound = new LBitmap(new LBitmapData(imglist["sound"]));
	var soundButton =new LButton(sound,sound);
	soundButton.y = 100;
	soundButton.x = 50;
	bglayer.addChild(soundButton);

	var soundText = new LTextField();
	soundText.x = 100;
	soundText.y = 120;
	soundText.size = 30;
	soundText.color = "#000000";
	soundText.text = ":   音乐与音效";
	soundText.weight = "bolder"
	bglayer.addChild(soundText);

	var help = new LBitmap(new LBitmapData(imglist["help"]));
	var helpButton = new LButton(help,help);
	helpButton.y = 200;
	helpButton.x = 50;
	bglayer.addChild(helpButton);

	var helpText = new LTextField();
	helpText.x = 100;
	helpText.y = 220;
	helpText.size = 30;
	helpText.color = "#000000";
	helpText.text = ":   操作与玩法";
	helpText.weight = "bolder"
	bglayer.addChild(helpText);

	var tip =new LBitmap(new LBitmapData(imglist["help90"]));
	var tipButton=new LButton(tip,tip);
	tipButton.y=310;
	tipButton.x=40;
	bglayer.addChild(tipButton);

	var tipText = new LTextField();
	tipText.x = 100;
	tipText.y = 325;
	tipText.size = 30;
	tipText.color = "#000000";
	tipText.text = ":   帮助与提示";
	tipText.weight = "bolder"
	bglayer.addChild(tipText);
	
	// var bitmap1=new LBitmap(new LBitmapData(imglist["gogame"]));
	// var startbutton=new LButton(bitmap1,bitmap1);
	// startbutton.y=8;
	// startbutton.x=270;
	// bglayer.addChild(startbutton);
	// startbutton.addEventListener(LMouseEvent.MOUSE_UP,gamestart);
}


function gamestart()//画面初始化
{
	foodnumber = 0; //食物数
	floornumber = 0;//楼层数
	bglayer.die();
	bglayer.removeAllChild();
	backg = new Background();
	bglayer.addChild(backg);//运动的背景层是一个新的类型，是背景层之子。
	/*背景层的声明一定要在字层声明之前，否则字会被覆盖掉。*/
	var foodIcon=new LBitmap(new LBitmapData(imglist["foodicon"]));
	foodIcon.y = 60;
	foodIcon.x = 1;
	bglayer.addChild(foodIcon);

	flootText = new LTextField();//楼层字
	flootText.size = 240;
	flootText.color = "#DEE8ED";
	flootText.text = "0";
	flootText.x = 170;
	flootText.y = 200;
	bglayer.addChild(flootText);

    //就是一个冒号
	ft = new LTextField();
	ft.size =20;
	ft.color = "black";
	ft.text =": ";
	ft.x = 23;
	ft.y = 58;
	bglayer.addChild(ft);

	foodText=new LTextField();
	foodText.size = 20;
	foodText.color = "red";
	foodText.text = foodnumber;
	foodText.x = 35;
	foodText.y = 60;
	bglayer.addChild(foodText);//食物数量

    //血条创建
	lifetiao = new LGraphics();
	bglayer.addChild(lifetiao);
	//Graphics类包含一组可用来创建矢量形状的方法,画背景,背景是白色
	//drawRect ( thickness  color  param  isFill  fillColor ) 
	lifetiao.drawRect(3,"#000000",[0,20,200,10],true,"#91D94E");//血条层风寒看1

	// LSprite 类是基本显示列表构造块：一个可显示图形并且也可包含子项的显示列表节点。
	floorlayer = new LSprite(); 
	
	bglayer.addChild(floorlayer);//记录各个地板，地板层是地板数组，也是背景层之子
	
	foodlayer = new LSprite();
	bglayer.addChild(foodlayer);

	initrabbit();

	//addEventListener(type,listener)
	// 	type：事件的类型。
	// listener：处理事件的侦听器函数。
	//LEvent.ENTER_FRAME: [播放事件] 播放头进入新帧时调度。如果播放头不移动，或者只有一帧，则会继续以帧速率调度此事件。
	//此事件为广播事件，这意味着具有注册了此事件的侦听器的所有显示对象都会调度此事件。
	bglayer.addEventListener(LEvent.ENTER_FRAME, onframe);//添加循环事件
	if(!LGlobal.canTouch){//当前浏览器是否是移动浏览器
		//非触屏时添加键盘事件
		LEvent.addEventListener(LGlobal.window,LKeyboardEvent.KEY_DOWN,onkeydown);//键盘按下执行onkeydown
		LEvent.addEventListener(LGlobal.window,LKeyboardEvent.KEY_UP,onkeyup);//键盘松开执行onkeyup
	}
}
function onframe()
{
	if(floornumber%2 == 0)
	{
		stepchange = stepchange+0.005;////可变移动量+0.005游戏中画面的滚动速度
	}
	if(rabbit.hp == rabbit.maxhp)//hp，maxhp初始值为10，
	{
		hpfull = 1;
	}//是否满血
	else{
		hpfull = 0;
	}
	if(!hpfull){
		if(recover-- <= 0)
		{
			recover = 80;
			rabbit.hp++;
		}
	}//以上是对回血功能的实现,如果不是满血状态的话recover随着数字递减，如果小于等于0的话就回血。
	
	if(flooradd-- <= 0)
	{
		flooradd = 5;
		addfloor();
	}
	//添加地板

	// if(foodadd-- <= 0)
	// {
	// 	foodadd = 50;
	// 	addfood();
	// }//添加食物

	var i = null;
	for(i in floorlayer.childList)
	{
		var kid = floorlayer.childList[i];
        //因为梯子不停往上飘y值逐渐递减 所以判断是否小于
		if(kid.y <= -1*kid.getHeight())
		{
			floorlayer.removeChild(kid);
			floornumber++;
		}
		kid.run();
		
	}
	// var j = null;
	// for(j in foodlayer.childList)//超过顶层食物消失
	// {
	// 	var kid1 = foodlayer.childList[j];
	// 	if(kid1.y <= -1*kid1.getHeight())
	// 	{	
	// 		//console.log("食物跑了");
	// 		foodlayer.removeChild(kid1);
	// 	}
	// 	kid1.run();
	// }


	rabbit.run();
    
	lifetiao.drawRect(3,"#000000", [0,20,200,10], true,"#000000");//扣血后的填充色
	if(rabbit.hp / rabbit.maxhp > 0.66){//满血血条颜色
	lifetiao.drawRect(3,"#000000",[0, 20, 200*(rabbit.hp/rabbit.maxhp), 10], true, "#91D94E");
	
	}
	else if(rabbit.hp/rabbit.maxhp < 0.33)//剩3血的时候
	{
		lifetiao.drawRect(3,"#000000",[0, 20, 200*(rabbit.hp/rabbit.maxhp),10], true ,"#D03227");
	}
	else{
		lifetiao.drawRect(3,"#000000",[0, 20, 200*(rabbit.hp/rabbit.maxhp), 10], true, "#F5B509");
	}//尚未解决
	
	if(floornumber > 9){
		flootText.x = 130;
	}

	flootText.text = floornumber;

	if(!rabbit.hp){
		over();
	}
}

function over()//游戏结束界面
{
	first = true;
	bglayer.die();//背景层die
	overlayer = new LSprite();
	overlayer.graphics.drawRect(4, "#009DD6", [90, 150, 300, 300], true, "#ffffff");
	bglayer.addChild(overlayer);

	tiplayer1 = new LTextField();
	tiplayer1.size = 40;
	tiplayer1.color = "#000000";
	tiplayer1.text = "您的成绩为" + floornumber + "层";
	tiplayer1.x = 100;
	tiplayer1.y = 240;
	overlayer.addChild(tiplayer1);

	tiplayer2 = new LTextField();
	tiplayer2.size = 20;
	tiplayer2.color = "#000000";
	tiplayer2.text = "点击鼠标左键继续挑战";
	tiplayer2.x = 145;
	tiplayer2.y = 350;
	overlayer.addChild(tiplayer2);
	bglayer.addEventListener(LMouseEvent.MOUSE_UP,gamestart);
}

//游戏结束时的提示函数
