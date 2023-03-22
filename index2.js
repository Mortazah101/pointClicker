document.getElementById("mainTitle").innerText = "Point and click adventure";

const offsetCharacter = 16;

const mainCharacter = document.getElementById("mainCharacter");
const gameScreen = document.getElementById("gameWindow");


gameWindow.onClick = function(e){

    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left; //xposition of the element
    var Y = e.clientY - rect.right; //yposition of the element
    mainCharacter.style.left = x - offsetCharacter + "px";
    mainCharacter.style.top = y - offsetCharacter + "px";
    //console.log(x);
}