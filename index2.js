document.getElementById("mainTitle").innerText = "Point and click adventure";
document.getElementById("mainTitle").style.textAlign = "center";

const offsetCharacter = 16;
const characterAudio = document.getElementById("characterAudio");
const mainCharacter = document.getElementById("mainCharacter");
const gameWindow = document.getElementById("gameWindow");
const mainCharacterSpeech =  document.getElementById("mainCharacterSpeech");
const counterspeech = document.getElementById("counterspeech");
const sec = 1000;

//hidehero();



gameWindow.onclick = function (e) {
    if (mainCharacterSpeech.style.opacity == 0 && counterspeech.style.opacity == 0){

    
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    mainCharacter.style.left = x - offsetCharacter + "px";
    mainCharacter.style.top = y - offsetCharacter + "px";

   // showSpeech("what is the password?")
    //hideSpeech();

   
    switch (e.target.id) {
        case "door1":
            
        showhero();
        showSpeech(  "What is the password?" ,mainCharacterSpeech ,characterAudio);
        setTimeout( showSpeech,  4* sec, "Look in the hole.", counterspeech, characterAudio, countercharacter);
        hidecounterspeech( countercharacter);
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
            case "statue":
                window.location.href = "index.html"
            case "bord":
                showSpeech("You just got pranked!!")
        default:
           // hidehero();
        //    hideSpeech();
        
        // do something when it doesn't have a case
        break;
    }
}
}

function showSpeech (dialog, speech, audio){

    // trigger speech and audio // 
    speech.style.opacity = 1;
    speech.innerText = dialog;
    audio.play();
    audio.currentTime = 0;

    // doesnt display after 5 sec //
    setTimeout(hideSpeech, 4 * sec, speech, audio);
    ///setTimeout(hidehero,  sec * 5);
}
function hideSpeech(targetBubble, targetAudio){
    targetBubble.style.opacity = 0;
    targetBubble.innerText = " ";
    targetAudio.pause();
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

function showmap(){
    titlemap.style.opacity = 0;
}

function hidecounterspeech(){
    countercharacter.style,opacity = 0;
}
function showcounterspeech(){
    counterspeech.style.opacity = 1;
}