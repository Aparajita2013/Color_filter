function preload() {
    
}

function setup() {
    canvas = createCanvas(660, 490)
    canvas.position(150, 250);
    video = createCapture(VIDEO);
    video.hide()
    tint_color = ""
}

function draw() {
    image(video, 0, 0, 660, 490)
    tint(tint_color)
}

function apply_filter() {
    tint_color = document.getElementById("color").value;
}

function take_snapshot() {
    save("Filter_Color.png")
}