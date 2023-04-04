document.getElementById("mainTitle").innerText = "Point and click adventure";
document.getElementById("mainTitle").style.textAlign = "center";

const offsetCharacter = 16;
const characterAudio = document.getElementById("characterAudio");
const mainCharacter = document.getElementById("mainCharacter");
const gameWindow = document.getElementById("gameWindow");
const mainCharacterSpeech =  document.getElementById("mainCharacterSpeech");
const counterspeech = document.getElementById("counterspeech");
const sec = 1000;
hidehero();
gameWindow.onclick = function (e) {
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    mainCharacter.style.left = x - offsetCharacter + "px";
    mainCharacter.style.top = y - offsetCharacter + "px";

    showSpeech("what is the password?")
    hideSpeech();

  
    switch (e.target.id) {
        case "door1":
        showhero();
        showSpeech("What is the password?");
            // something insert here
            break;
        case "hero":
        
        showSpeech("What is the password?");
            // something insert here
            break; 
        case "door2":
            console.log("this is door two");
            
            // something insert here
            break;

        default:
            hidehero();
            hideSpeech();
        
            // do something when it doesn't have a case
            break;
    }
}

function showSpeech (  dialog){

    // trigger speech and audio // 
    mainCharacterSpeech.style.opacity = 1;
    mainCharacterSpeech.innerText = dialog;

    // doesnt display after 5 sec //
    setTimeout(hideSpeech, sec * 4 );
    ///setTimeout(hidehero,  sec * 5);
    
    
}
function hideSpeech(){
    mainCharacterSpeech.style.opacity = 0;
    mainCharacterSpeech.innerText = "  ";
    

}
function hidehero(){
    hero.style.opacity = 0;
    mainCharacterSpeech.innerText = "  ";

}
function showhero(){
    hero.style.opacity = 1;
    mainCharacterSpeech.innerText = "  ";

}

function playAudio() {
    characterAudio();


}
//function showSpeech(counterspeech, characterAudio, )
{

}