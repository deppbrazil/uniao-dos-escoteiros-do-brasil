// button home screen //
function goContent() {
    location.href = "content.html"
}

// progressBar //
var progress = new Number();
var Max = new Number();
var progress = 0;
var Max = 100;

function start() {
    if ((progress + 1) < Max) {
        progress = progress + 1;
        document.getElementById("progressBar").value = progress;
        setTimeout("start();", 200);
    }
}