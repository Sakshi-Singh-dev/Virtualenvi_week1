function showMessage() {
    alert("Thank you for visiting my website!");
}

let colors = ["white", "lightblue", "lightgreen", "lightyellow", "lavender", "mistyrose"];
let currentColor = 0;

function changeColor() {
    document.body.style.backgroundColor = colors[currentColor];
    currentColor++;

    if (currentColor >= colors.length) {
        currentColor = 0;
    }
}