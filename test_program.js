let helloWorld;

function start_app() {

    NOOPBOT_FETCH({API: 'hexbot'}, changeColor); 

}

function changeColor(responseJson){  
    document.getElementById("helloWorld").style.color = responseJson.colors[0].value;
}