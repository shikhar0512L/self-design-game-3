const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, backgroundImg;
var canvas, tower, ground, cannon, cannonBall;


function preload() {
    backgroundImg = loadImage("./assets/background.gif");
    towerImage = loadImage("./assets/tower.png");
}

function setup() {
    canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(0, height - 1, width * 2, 1);
    tower = new Tower(150, 350, 160, 310);
    angle = -PI / 4;
    cannon = new Cannon(180, 110, 130, 100, angle);
    cannonBall = new CannonBall(cannon.x, cannon.y);

}

function draw() {
    background(189);
    image(backgroundImg, 0, 0, width, height);

    Engine.update(engine);
    ground.display();
    tower.display();
    cannon.display();
    cannonBall.display();
}


function keyPressed() {
    if (keyCode === 32) {
        cannonBall.shoot();
    };


};