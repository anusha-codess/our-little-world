/* ==========================================
   OUR LITTLE WORLD ❤️
   SCRIPT PART 1
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    // ======================
    // ELEMENTS
    // ======================

    const welcomeScene = document.getElementById("welcomeScene");
    const transitionScene = document.getElementById("transitionScene");
    const envelopeScene = document.getElementById("envelopeScene");
    const letterScene = document.getElementById("letterScene");
    const backScene = document.getElementById("backScene");

    const overlay = document.getElementById("overlay");

    const input = document.getElementById("nameInput");
    const proposal = document.getElementById("proposalSection");

    const yesButtons = document.querySelectorAll(".yesBtn");

    const envelope = document.getElementById("envelope");
    const flap = document.querySelector(".flap");
    const seal = document.querySelector(".seal");
    const miniLetter = document.querySelector(".insideLetter");

    const paper = document.querySelector(".paper");

    const paragraphs = document.querySelectorAll(".paragraph");

    const turnPageBtn = document.getElementById("turnPageBtn");

    const foldedNote = document.getElementById("foldedNote");

    const loveReveal = document.getElementById("loveReveal");

    const heartExplosion = document.getElementById("heartExplosion");

    const ribbon = document.querySelector(".ribbon");

    const ribbonPopup = document.getElementById("ribbonPopup");

    const secretMessage = document.getElementById("secretMessage");

    const shootingStar = document.getElementById("shootingStar");

    const passwordScene = document.getElementById("passwordScene");

const passwordInput = document.getElementById("passwordInput");

const passwordButton = document.getElementById("passwordButton");

const passwordError = document.getElementById("passwordError");

const PASSWORD = "2705";

function unlockWebsite(){

    if(passwordInput.value===PASSWORD){

        passwordScene.classList.add("fadeOut");

        setTimeout(()=>{

            passwordScene.style.display="none";

            welcomeScene.style.display="flex";

            welcomeScene.classList.add("fadeIn");

            passwordInput.value="";

        },800);

    }

    else{

        passwordError.textContent="This website is not meant for you.";

        passwordInput.value="";

        passwordInput.focus();

    }

}

passwordButton.addEventListener("click",unlockWebsite);

passwordInput.addEventListener("keydown",function(e){

    if(e.key==="Enter"){

        unlockWebsite();

    }

});

    // ======================
    // HEARTS
    // ======================

    const heartContainer = document.getElementById("heartContainer");

    for(let i=0;i<35;i++){

        const heart=document.createElement("div");

        heart.className="heart";

        heart.innerHTML="❤";

        heart.style.left=Math.random()*100+"vw";

        heart.style.fontSize=(18+Math.random()*18)+"px";

        heart.style.animationDuration=(8+Math.random()*8)+"s";

        heart.style.animationDelay=(Math.random()*8)+"s";

        heartContainer.appendChild(heart);

    }

    // ======================
    // SPARKLES
    // ======================

    const sparkleContainer=document.getElementById("sparkleContainer");

    for(let i=0;i<40;i++){

        const sparkle=document.createElement("div");

        sparkle.className="sparkle";

        sparkle.innerHTML="✦";

        sparkle.style.left=Math.random()*100+"vw";

        sparkle.style.top=Math.random()*100+"vh";

        sparkle.style.fontSize=(8+Math.random()*8)+"px";

        sparkle.style.animationDelay=(Math.random()*5)+"s";

        sparkleContainer.appendChild(sparkle);

    }

    // ======================
// ENTER NAME
// ======================

input.addEventListener("keydown", function (e) {

    if (e.key !== "Enter") return;

    const enteredName = input.value.trim().toLowerCase();

    if (enteredName === "aryan") {

        proposal.style.display = "block";
        proposal.classList.add("fadeIn");

        input.disabled = true;

    } else {

        input.value = "";
        input.focus();

        const question = document.querySelector(".question");

        question.style.color = "#ff6b6b";

        question.innerHTML =
            "Nice try guessing the password...<br>now try guessing name.";

        setTimeout(() => {

            question.style.color = "white";

            question.innerHTML = "What's your name?";

        }, 2000);

    }

});

    // ======================
    // YES BUTTON
    // ======================

    yesButtons.forEach(btn=>{

        btn.addEventListener("click",startStory);

    });

    function startStory(){

        if (!musicPlaying) {
    music.play().catch(() => {});
    musicPlaying = true;
}

musicButton.style.opacity = "1";
musicButton.style.pointerEvents = "auto";

        welcomeScene.classList.add("fadeOut");

        setTimeout(()=>{

            welcomeScene.style.display="none";

            overlay.style.opacity="0.35";

            transitionScene.style.display="flex";

            document.querySelector(".transitionText").classList.add("fadeIn");

            setTimeout(showEnvelope,2000);

        },800);

    }

    function showEnvelope(){

    transitionScene.style.display="none";

    envelopeScene.style.display="flex";

    envelope.classList.add("envelopeAppear");

    setTimeout(()=>{

        envelope.classList.add("envelopeFloat");

    },1200);

    setTimeout(()=>{

        openEnvelope();

    },4200);

}

    // CONTINUE IN PART 2...
    /* ==========================================
   SCRIPT PART 2
========================================== */

function openEnvelope(){

    envelope.classList.remove("envelopeFloat");

    seal.classList.add("dropSeal");

    setTimeout(()=>{

        flap.classList.add("openFlap");

    },700);

    setTimeout(()=>{

        miniLetter.classList.add("slideLetter");

    },1600);

    setTimeout(()=>{

        openLetter();

    },3200);

}

// Start envelope opening after appearing


function openLetter(){

    envelopeScene.style.display="none";

    overlay.style.opacity="0";

    letterScene.style.display="flex";

    paper.classList.add("paperAppear");
    console.log("Reached openLetter");

    revealParagraphs();
    console.log("Called revealParagraphs");

}

function revealParagraphs(){

    paragraphs.forEach(paragraph=>{

        paragraph.classList.add("show");

    });

}

// ======================
// TURN PAGE
// ======================

turnPageBtn.addEventListener("click",()=>{

    letterScene.classList.add("fadeOut");

    setTimeout(()=>{

        letterScene.style.display="none";

        backScene.style.display="flex";

        backScene.classList.add("fadeIn");

    },700);

});
/* ==========================================
   SCRIPT PART 3
========================================== */

// ======================
// FOLDED NOTE
// ======================

foldedNote.addEventListener("click",()=>{

    foldedNote.classList.add("open");

    setTimeout(()=>{

        loveReveal.classList.add("show");

        createHeartExplosion();

    },900);

});

// ======================
// HEART EXPLOSION
// ======================

function createHeartExplosion(){

    heartExplosion.innerHTML="";

    for(let i=0;i<45;i++){

        const heart=document.createElement("div");

        heart.className="explosionHeart";

        heart.innerHTML="❤";

        heart.style.left="50%";

        heart.style.top="50%";

        heart.style.fontSize=(16+Math.random()*20)+"px";

        heart.style.setProperty(

            "--x",

            (Math.random()*900-450)+"px"

        );

        heart.style.setProperty(

            "--y",

            (Math.random()*700-350)+"px"

        );

        heartExplosion.appendChild(heart);

    }

}

// ======================
// SHOOTING STAR
// ======================

setTimeout(()=>{

    shootingStar.classList.add("fly");

},10000);

// ======================
// SECRET MESSAGE
// ======================

setTimeout(()=>{

    secretMessage.classList.add("show");

},18000);

// Hide after 5 sec

setTimeout(()=>{

    secretMessage.classList.remove("show");

},23000);

// ======================
// RIBBON
// ======================

ribbon.addEventListener("mouseenter",()=>{

    ribbon.classList.add("wiggle");

    ribbonPopup.classList.add("show");

});

ribbon.addEventListener("mouseleave",()=>{

    ribbonPopup.classList.remove("show");

});
/* ==========================================
   SCRIPT PART 4
========================================== */

// ======================
// MUSIC
// ======================

const music=document.getElementById("backgroundMusic");

const musicButton=document.getElementById("musicButton");

let musicPlaying=false;

musicButton.addEventListener("click",()=>{

    if(!musicPlaying){

        music.play().catch(()=>{});

        musicButton.innerHTML="♫";

        musicPlaying=true;

    }

    else{

        music.pause();

        musicButton.innerHTML="♪";

        musicPlaying=false;

    }

});

// ======================
// AUTO SCROLL LETTER
// ======================



// ======================
// SCROLL TO TOP
// ======================

paper.addEventListener("dblclick",()=>{

    paper.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ======================
// LITTLE HEARTS
// ======================

document.addEventListener("click",(e)=>{

    // Don't show hearts on the password screen
    if(passwordScene.style.display !== "none"){
        return;
    }

    const heart=document.createElement("div");

    heart.innerHTML="❤";

    heart.style.position="fixed";

    heart.style.left=e.clientX+"px";

    heart.style.top=e.clientY+"px";

    heart.style.pointerEvents="none";

    heart.style.color="#B63A45";

    heart.style.fontSize="22px";

    heart.style.zIndex="9999";

    heart.style.transition="1s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.style.transform="translateY(-80px) scale(1.8)";

        heart.style.opacity="0";

    },50);

    setTimeout(()=>{

        heart.remove();

    },1100);

});

// ======================
// SECRET KONAMI STYLE
// ======================

let clicks=0;

document.querySelector(".title").addEventListener("click",()=>{

    clicks++;

    if(clicks===7){

        alert("❤️ You found a little secret. I love you endlessly ❤️");

        clicks=0;

    }

});

// ======================
// PREVENT RIGHT CLICK
// ======================

document.addEventListener("contextmenu",(e)=>{

    e.preventDefault();

});

// ======================
// PRELOAD MUSIC
// ======================

music.load();
/* ==========================================
   SCRIPT PART 5
========================================== */

// ======================
// KEYBOARD SHORTCUTS
// ======================

document.addEventListener("keydown",(e)=>{

    // Press H → Heart explosion

    if(e.key==="h" || e.key==="H"){

        createHeartExplosion();

    }

    // Press T → Scroll letter to top

    if(e.key==="t" || e.key==="T"){

        if(letterScene.style.display==="flex"){

            paper.scrollTo({

                top:0,

                behavior:"smooth"

            });

        }

    }

});

// ======================
// WINDOW RESIZE
// ======================

window.addEventListener("resize",()=>{

    ribbonPopup.classList.remove("show");

});

// ======================
// PAGE VISIBILITY
// ======================

document.addEventListener("visibilitychange",()=>{

    if(document.hidden){

        if(musicPlaying){

            music.pause();

        }

    }else{

        if(musicPlaying){

            music.play().catch(()=>{});

        }

    }

});

// ======================
// CONSOLE MESSAGE ❤️
// ======================

console.log(

`❤️
If you're reading this...

I hope you know how loved you are.

Made with lots of love.

— Anu ❤️
`);


// ======================
// END OF SCRIPT
// ======================

});