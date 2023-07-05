const test = document.getElementById('test_container');

function onHover(id, colour) {
    const curr = document.getElementById(id);
    curr.style.backgroundColor = colour;
    console.log("F")
}


function DrawMap(s, x, y) {
    const tx = -(test.getBoundingClientRect().width - x)
    const ty = -(test.getBoundingClientRect().height - y)
    const params = `transform: scale(${s},${s}) translate(${tx}px, ${ty}px);`;
    test.style = params;
    console.log(test.getBoundingClientRect(), s, params)
}

DrawMap(0.5, 10, 40);

window.onresize = function res() {
    DrawMap(0.5, 10,80);
    console.log(test.offsetLeft, test.offsetTop)
}
