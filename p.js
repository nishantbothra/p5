function preload() {}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(150, 150);
    video = createCapture(VIDEO);
    video.hide();
    tintColor = "";
}

function draw() {
    image(video, 230, 150, 220, 200);
    fill(50, 80, 100);
    stroke(50, 80, 100);
    circle(50, 100, 20);
    circle(50, 430, 20);
    circle(590, 100, 20);
    circle(590, 430, 20);

    fill(50, 80, 100);
    stroke(50, 80, 100);
    rect(60, 95, 520, 10);
    rect(60, 425, 520, 10);
    rect(585, 95, 10, 340);
    rect(45, 95, 10, 340);

    tint(tintColor);
}

function add_filter() {
    tintColor = document.getElementById("opt_color").value;
}

function snapshot() {
    save("image.png");
}
















































