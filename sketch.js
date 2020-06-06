var bullet;
var speed, weight, thickness;
var dam;

function setup() {
    createCanvas(1600, 400);
    thickness = random(22, 83);
    speed = random(223, 321);
    weight = random(30, 52);
    wall = createSprite(1200, 200, thickness, height / 2);
    wall.thickness = thickness;
    wall.shapeColor = (80, 80, 80);
    bullet = createSprite(400, 200, 50, 10);
    bullet.velocityX = speed;
    bullet.weight = weight;
}

function draw() {
    background("black");
    bullet.collide(wall);
    damage();
    drawSprites();
}

function damage() {
    dam = (0.5 * bullet.weight * bullet.velocityX * bullet.velocityX) / (wall.thickness * wall.thickness * wall.thickness);
    if (dam < 10) {
        bullet.shapeColor = "green";
    }
    if (dam > 10) {
        bullet.shapeColor = "red";
    }
    if (dam = 10) {
        bullet.shapeColor = "yellow";
    }
}