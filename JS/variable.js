//bglayer:背景层
// loadinglayer:进度条层
// floorlayer:地板层，记录地板
// rabbit:动物
// foodlayer:食物层
var bglayer,loadinglayer,floorlayer,rabbit,foodlayer;

var imgdata = new Array(//这是个存图片的数组，为了一会加载用
	{name:"game",path:"./IMG/游戏封面.jpg"},
	{name:"bg",path:"./IMG/bg.png"},//背景
	// {name:"bg2",path:"bg2.jpg"},//背景2
	// {name:"bg3",path:"bg3.jpg"},//背景3
	{name:"text", path:"./IMG/font.png"},//游戏名称
	{name:"rabbit",path:"./IMG/rabbit.png"},//爱丽丝
	{name:"plane1",path:"./IMG/food1.png"},//食物
	{name:"plane2",path:"./IMG/food2.png"},//食物
	{name:"plane3",path:"./IMG/food3.png"},//食物
	{name:"foodicon",path:"./IMG/foodicon.png"},//食物图标
	{name:"solid",path:"./IMG/solid.png"},//实心梯
	{name:"spring",path:"./IMG/spring.png"},//弹簧梯
	{name:"r_slide",path:"./IMG/r_slide.png"},//右滑梯
	{name:"thorn",path:"./IMG/thorn.png"},//带刺梯
	{name:"vanish",path:"./IMG/vanish.png"},//消失梯
	{name:"start",path:"./IMG/start.png"},//开始按钮
	{name:"help",path:"./IMG/help.png"},//操作说明按钮
	{name:"help90",path:"./IMG/help90.png"},//操作说明按钮
	{name:"set",path:"./IMG/set.png"},//设置按钮
	{name:"sound",path:"./IMG/sound.png"},
	{name:"up_thorn",path:"./IMG/up_thorn.png"});//顶刺
var	first =true;//游戏开始时添加的第一块木板防止小人直接坠下
var imglist=new Array();//存储加载完成的图片
var floorlist=new Array();
var step=10;//每次循环移动量
var stepchange=10;//可变移动量
var flooradd=0;//参量1与踏板出现频率有关
var recover=80,hpfull=1;;//recover与回血有关,hpfull用来判断是否满血是否需要蓄血
var tan=0;//此变量用于记录是否为处在弹跳板状态
var floornumber=0;//参量3用来记录下了多少层
var foodadd=50,foodnumber=0;//记录食物间隔
