let car = [];
var r =206.5;
var b = 87.5;
var g = [];
var x =0;
var t = [];
var p=0,j = 0;
juncx = [];
juncy = [];
function setup() {
    createCanvas(1570,800);
    for(var j = 0 ; j < 14 ; j++)
      if(j <=1)
      {  
        var w = random(255);
        var e = random(255);
        var y = random(255);
        car[j]  = new Car(10.5,r,20,w,e,y);
        r = r +240;
    
      }
      else{
        var w = random(255);
        var e = random(255);
        var y = random(255);
        car[j] = new Car(b,10.5,20,w,e,y);
        b = b+120;
      }
      for(var j = 2;j<13;j++)
      {
      g[j] = 3;
    }
      t[0] = 1;
      t[1] = 1;

      }
    
function draw() {
    background(64,64,64);
    fill(0,102,0);
    
    var i=0 ;
    var y =0; 
    var q = 0;
    
    while(y<=720){
    
     i=0 ;
     while(i<=1320){
      stroke('rgba(255,255,255)')
      strokeWeight(5);
     rect(i,y,55,175,10);
     i = i +120; 
     }
    y = y + 240; 
    }
    strokeWeight(0);
    fill(255,255,255);
    i=87.5 ;
    while(i<=1287.5){
    rect(i,0,5,10);
    rect(i,30,5,10);
    rect(i,60,5,10);
    rect(i,90,5,10);
    rect(i,120,5,10);

    rect(i,270,5,10);
    rect(i,300,5,10);
    rect(i,330,5,10);
    rect(i,360,5,10);

    rect(i,510,5,10);
    rect(i,540,5,10);
    rect(i,570,5,10);
    rect(i,600,5,10);
    
    rect(i,750,5,10);
    i = i +120; 
    }

    fill(255,255,255);

    rect(22.5,206.5,10,5);
    rect(22.5,446.5,10,5);
    i = 140;
     y = 206.5;
    while(y<=446.5)
    {
       i= 140;
       while(i<= width)
    {
       rect(i,y,10,5);
       i = i+120; 
    }
       y = y+240; 
    }
    fill(0,102,0);
    var y = 206.5;
    while(y<=446.5)
    {
       i= 87.5;
       while(i<= width)
    {  stroke('rgba(255,255,255)')
       strokeWeight(3);
       juncx.push(i);
       juncy.push(y);
       
       i = i+120; 
    }
       y = y+240; 
    }
    strokeWeight(0);

for(var o = 0; o <14;o++)
{
   
if(o>= 2)
{
  for(var m = 0 ;m<22;m++)
{
  if(car[o].centrex  == juncx[m] && car[o].centrey  == juncy[m])
    {
      g[o] =random(1,5);
      car[o].centrex = juncx[m];
      car[o].centrey = juncy[m];
      break;
    }
}
car[o].show();
car[o].move(g[o]);
car[o].gone(g[o]);
}
else
{
    for(var m = 0 ;m<22;m++)
{
  if(car[o].centrex  == juncx[m] && car[o].centrey  == juncy[m])
    {
      t[0] = random(1,5);
      car[o].centrex = juncx[m];
      car[o].centrey = juncy[m];
      break;
    }
}
car[o].show();
car[o].move(t[o]);
car[o].gone(t[o]);
}
}
}

class Car{
  constructor(tempX,tempY,tempZ,tempR,tempG,tempB){
    this.centrex = tempX;
    this.centrey = tempY;
    this.radius = tempZ;
    this.r = tempR;
    this.g = tempG;
    this.b = tempB;

  }
  show(){
    stroke('rgba(255,255,255)')
    strokeWeight(3);
    fill(this.r,this.g,this.b);
    ellipse(this.centrex,this.centrey,this.radius);

  }
  move(t){
    if(t >=1 && t<2)
   this.centrex = this.centrex + 1;
    if(t >=2 && t<3)
   this.centrey = this.centrey - 1;
    if(t >=3 && t<4)
   this.centrey = this.centrey + 1;
    if(t >=4)
   this.centrex = this.centrex - 1;
  }
  gone(){
   if(this.centrex > width )
    this.centrex = 0.5;
     if(this.centrex <= 0)
    this.centrex = width + 0.5;
     if(this.centrey > height )
    this.centrey = 0.5;
    if( this.centrey <= 0)
    this.centrey = height + 0.5;
  }
}
