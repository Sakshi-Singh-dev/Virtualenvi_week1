function showMessage() {
    var box = document.getElementById("message-box");
    box.textContent = "Hello! Thanks for visiting my Week 1 internship website! 👋";
}

var colors = ["white", "lightblue", "lightgreen", "lightyellow", "lavender", "mistyrose"];
var currentColor = 0;

function changeColor() {
    var box = document.getElementById("message-box");
    document.body.style.backgroundColor = colors[currentColor];
    box.textContent = "Background changed to: " + colors[currentColor];
    currentColor++;
    if (currentColor >= colors.length) {
        currentColor = 0;
    }
}

function resetColor() {
    document.body.style.backgroundColor = "white";
    currentColor = 0;
    var box = document.getElementById("message-box");
    box.textContent = "Background reset to white.";
}
