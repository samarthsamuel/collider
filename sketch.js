var canvas;
var box,block1,block2,block3,block4
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
 
   block1 = createSprite(75,595,150,20)
   block1.shapeColor = "black";
   block2 = createSprite(285,595,150,20)
   block2.shapeColor = "pink"
   block3 = createSprite(500,595,150,20)
   block3.shapeColor = "red"
   block4 = createSprite(700,595,150,20)
   block4.shapeColor = "purple"

   box = createSprite(200,200,40,40)
   box.shapeColor = "white"
   box.velocityX  = 2;
   box.velocityY = 2;
   


    
      



     
    }
   

function draw() {
    background("grey")
 createEdgeSprites();

    //create edgeSprite

    if(block1.isTouching(box)){
        box.shapeColor = "black"
           box.bounceOff(block1);   
           box.velocityX = 0;
           box.velocityY = 0;
           music.stop();
       }
       
       
       if(block2.isTouching(box)){
        box.shapeColor = "pink"
           box.bounceOff(block2);   
           box.velocityX = 0;
           box.velocityY = 0;
           music.stop();
       }
       
       
       if(block3.isTouching(box)){
        box.shapeColor = "red"
           box.bounceOff(block2);   
           box.velocityX = 0;
           box.velocityY = 0;
           music.stop();
       }
       
       if(block4.isTouching(box)){
        box.shapeColor = "perple"
           box.bounceOff(block2);   
           box.velocityX = 0;
           box.velocityY = 0;
           music.stop();
       }



drawSprites();
    //add condition to check if box touching surface and make it box
    
}

