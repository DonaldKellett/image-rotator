var i = 0;

function imageRotate() {
    i = i + 0.1;
    postMessage(i);
    setTimeout("imageRotate()",10);
}

imageRotate();