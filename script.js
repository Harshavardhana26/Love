function hideAll(){
    document.querySelectorAll(".screen").forEach(s => s.classList.add("hidden"));
}

function goQuestion(){
    hideAll();
    document.getElementById("question").classList.remove("hidden");
}

function showSure(){
    hideAll();
    document.getElementById("surePage").classList.remove("hidden");
}

function goMessageIntro(){
    hideAll();
    document.getElementById("messageIntro").classList.remove("hidden");
}

function goMessage(){
    hideAll();
    document.getElementById("message").classList.remove("hidden");
}

function showNoPage(){
    hideAll();
    document.getElementById("noPage").classList.remove("hidden");
}

/* Letter Text */

let messageLines = [
"My love,",
" you make every day of my life brighter and happier.",
"From the moment you came into my life, everything started feeling more beautiful and meaningful.",
"Your smile gives me peace, and your presence gives me strength.",
"I am grateful for every memory we share and every moment we spend together.",
"On this Valentine’s Day, I just want you to know that I love you more than words can ever express ❤️"
];

let lineIndex = 0;
let charIndex = 0;

function openLetter(){
    document.querySelector(".envelope").classList.add("open");
    setTimeout(typeLetter,1200);
}

function typeLetter(){
    if(lineIndex < messageLines.length){

        let line = messageLines[lineIndex];

        if(charIndex < line.length){
            document.getElementById("letterText").innerHTML += line.charAt(charIndex);
            charIndex++;
            setTimeout(typeLetter,40);
        }
        else{
            document.getElementById("letterText").innerHTML += "<br><br>";
            lineIndex++;
            charIndex = 0;
            setTimeout(typeLetter,400);
        }
    }
    else{
        document.getElementById("continueBtn").classList.remove("hidden");
    }
}

function proposal(){
    hideAll();
    document.getElementById("proposal").classList.remove("hidden");
}

function yesLove(){
    hideAll();
    document.getElementById("final").classList.remove("hidden");
}

/* Moving NO button */

window.onload = function(){
    let noBtn = document.getElementById("noBtn");

    if(noBtn){
        noBtn.addEventListener("mouseover", ()=>{
            noBtn.style.position="absolute";
            noBtn.style.left=Math.random()*80+"vw";
            noBtn.style.top=Math.random()*80+"vh";
        });
    }
}
