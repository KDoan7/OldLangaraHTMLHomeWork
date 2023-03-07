var total = 0;
var opener1 = [125, 225, 325];
var linker = [75, 100, 125];
var ender = [175, 250, 350];
var alert;

function opener() {
    var opener2 = document.getElementById("opener");
    if (opener2.value === "light") {
        total += opener1[0];
        document.getElementById("Opener").innerHTML = "Light Opener";
    } else if (opener2.value === "Medium") {
        total += opener1[1];
        document.getElementById("Opener").innerHTML = "Medium Opener";
    } else if (opener2.value === "Heavy") {
        total += opener1[2];
        document.getElementById("Opener").innerHTML = "Heavy Opener";
    } else if (opener2.value === "Select") {
        alert("You need to pick a strength");
    }
}

function linker2() {
    var linker3 = document.getElementById("linker");
    if (linker3.value === "Light") {
        total += linker[0];
        document.getElementById("Linker").innerHTML = "Light Linker";
    } else if (linker3.value === "Medium") {
        total += linker[1];
        document.getElementById("Linker").innerHTML = "Medium Linker";
    } else if (linker3.value === "Heavy") {
        total += linker[2];
        document.getElementById("Linker").innerHTML = "Heavy Linker";
    } else if (linker3.value === "Select") {
        alert("You need to pick a strength");
    }
}

function ender2() {
    var ender3 = document.getElementById("Ender");
    if (ender3.value === "Light") {
        total += ender[0];
        document.getElementById("Ender2").innerHTML = "Light Ender";
    } else if (ender3.value === "Medium") {
        total += ender[1];
        document.getElementById("Ender2").innerHTML = "Medium Ender";
    } else if (ender3.value === "Heavy") {
        total += ender[2];
        document.getElementById("Ender2").innerHTML = "Heavy Ender";
    } else if (ender3.value === "Select") {
        alert("You need to pick a strength");
    }
}

function reset() {
    total = 0;
    document.getElementById("Ender2").innerHTML = "";
    document.getElementById("Linker").innerHTML = "";
    document.getElementById("Opener").innerHTML = "";
    document.getElementById("Total3").innerHTML = "";
}

function total2() {
    document.getElementById("Total3").innerHTML = +total + "  Damge";
}

function image(x) {
    x.style.height = "300px";
    x.style.width = "300px";
}

function image2(x) {
    x.style.height = "350px";
    x.style.width = "700px";
}