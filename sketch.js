var bg, sleep, brush, gym, gym2, eat, bath, move, drink;
var astronaut;

function preload() {
  bg = loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  brush = loadAnimation("images/brush.png");
  gym = loadAnimation("images/gym1.png", "images/gym1.png", "images/gym2.png", "images/gym2.png");
  eat = loadAnimation("images/eat1.png", "images/eat1.png", "images/eat1.png", "images/eat2.png", "images/eat2.png", "images/eat2.png");
  bath = loadAnimation("images/bath1.png", "images/bath1.png", "images/bath1.png", "images/bath2.png", "images/bath2.png", "images/bath2.png");
  move = loadAnimation("images/move1.png", "images/move1.png", "images/move2.png", "images/move2.png");
  gym2 = loadAnimation("images/gym11.png", "images/gym12.png");
  drink = loadAnimation("images/drink1.png", "images/drink2.png");
}

function setup() {
  createCanvas(600, 500);

  astronaut = createSprite(300, 230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;
}

function draw() {
  background(bg);
  drawSprites();

  textSize(20);
  fill(255, 255, 0);
  text("Instructions:", 20, 35);
  textSize(15);
  text("Up Arrow = Brushing", 20, 55);
  text("Down Arrow = Gymming", 20, 70);
  text("Left Arrow = Eating", 20, 85);
  text("Right Arrow = Bathing", 20, 100);
  text("Space = Moving", 20, 115);
  text("E = Gymming 2", 20, 130);
  text("Q = Sleeping", 20, 145);
  text("Z = Drinking", 20, 160);

  edges = createEdgeSprites();
  astronaut.bounceOff(edges);

  if (keyDown("UP_ARROW")) {
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("DOWN_ARROW")) {
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("LEFT_ARROW")) {
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.x = 150;
    astronaut.y = 350;
    astronaut.velocityX = 0.5;
    astronaut.velocityY = 0.5;
  }

  if (keyDown("RIGHT_ARROW")) {
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.x = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("space")) {
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }

  if (keyDown("space")) {
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("space")) {
    astronaut.changeAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }

  if (keyDown("space")) {
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }

  if (keyDown("e")) {
    astronaut.addAnimation("gymming2", gym2);
    astronaut.changeAnimation("gymming2", gym2);
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("q")) {
    astronaut.changeAnimation("sleeping", sleep);
    astronaut.x = 300;
    astronaut.y = 230;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("z")) {
    astronaut.addAnimation("drinking", drink);
    astronaut.changeAnimation("drinking", drink);
    astronaut.x = 150;
    astronaut.y = 350;
    astronaut.velocityX = 0.5;
    astronaut.velocityY = 0.5;
  }
}