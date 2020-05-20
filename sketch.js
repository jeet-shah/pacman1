var obstacle,obstacle1,obstacle2,obstacle3,obstacle4,obstacle5,obstacle6,obstacle7,obstacle8,obstacle9,obstacle10;

function setup() {
  createCanvas(800,400);
  obstacle = createSprite(400,50,700,2);
  obstacle1 = createSprite(400,60,680,2);
  obstacle2 = createSprite(50,200,2,300);
  obstacle3 = createSprite(60,200,2,280);
  obstacle4 = createSprite(750,200,2,300);
  obstacle5 = createSprite(740,200,2,280);
  obstacle6 = createSprite(400,350,700,2);
  obstacle7 = createSprite(400,340,680,2);
}

function draw() {
  background(0);  
  drawSprites();
}