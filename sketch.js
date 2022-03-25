var g_jet, ev_jet;
var mis;

var evil_jet, good_jet;
var missile;

var missileGrp;

function preload() {
    good_jet = loadImage("fighter_jet.png");
    missile = loadImage("missile.png");
    evil_jet = loadImage("enemy_fighter_jet.png")
}

function setup() {
    createCanvas(1200,648);

    g_jet = createSprite(70,300,20,20);
    g_jet.addImage("good",good_jet);
    g_jet.scale = 0.2;

    mis = createSprite(70,300,20,20);
    mis.addImage("miss",missile);
    mis.scale = 0.03;

    ev_jet = createSprite(1130,300,20,20);
    ev_jet.addImage("evil",evil_jet);
    ev_jet.scale = 0.04;

    mis.visible = false;
}

function draw() {
    background("yellow");

    g_jet.visible = true;
    g_jet.y = World.mouseY;
    mis.y = World.mouseY;

    if (keyDown("space")) {
        mis.visible = true;
        mis.y = mis.y;
        mis.velocityX = 40;
        if (mis.isTouching(ev_jet)) {
            mis.visible = false;
        }
    }

    drawSprites();
}

function createMissiles() {
    missileGrp.add(missile);
}