let helloWorld;

function start_app() {

    let speed = 500;
    NOOPBOT_TICK_SETUP(getColour, speed);

}

function getColour() {
    NOOPBOT_FETCH({ API: 'hexbot' }, changeColor);
}

function changeColor(responseJson) {
    console.log(responseJson);
    document.getElementById("helloWorld").style.color = responseJson.colors[0].value;
}