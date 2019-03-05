// Your code goes here

function handleDOM(method, query, type, fn) {
    document[method](query)
        .addEventListener(type, fn);
}

document.querySelectorAll(".nav-link").forEach(function(a) {
    a.addEventListener("click", function(e) {
        e.preventDefault();
        window.open("https://www.youtube.com/watch?v=oHg5SJYRHA0");
    });
});

document.querySelectorAll(".destination .btn")
    .forEach(function(div) {
        div.addEventListener("click", function(e) {
            e.stopPropagation();
            e.target.style.display = "none";
    });
});

function makeRandomColorBg(e) {
    const colors = ["lightred", "lightgreen", "lightblue", "orange", "yellow", "pink", "lavender"];
    e.target.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}

function changeColors(bgColor, fontColor) {
    return function(e) {
        e.target.style.backgroundColor = bgColor;
        e.target.style.color = fontColor;
    }
}

function changeImg(src) {
    return function(e) {
        e.stopPropagation();
        e.target.src = src;
    }
}

handleDOM(
    "querySelector",
    ".inverse-content .img-content img",
    "click",
    changeImg("img/cat-lifevest.jpeg")
);

handleDOM(
    "querySelector",
    ".content-destination",
    "click",
    changeImg("img/cat-floor.jpeg")
);

handleDOM(
    "querySelector",
    ".img-content",
    "click",
    changeImg("img/cat-trust.jpg")
);

handleDOM(
    "querySelector", 
    ".main-navigation",
    "mouseenter",
    makeRandomColorBg
);

handleDOM(
    "querySelector",
    ".intro",
    "click",
    changeColors("hotpink", "white")
);

handleDOM(
    "querySelector", 
    ".intro img", 
    "click", 
    changeImg("img/Catbus.jpg")
);

