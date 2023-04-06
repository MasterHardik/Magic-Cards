let colorThemes = ["#16a085", "#3498db", "#9b59b6", "#f1c40f", "#e67e22", "#e74c3c", "#16a085", "#eee","#e67e22", "#7ed6df"]
const themeBase = document.body;
const main = document.getElementById("base")

var Age =0;
let CheckCardLocks = { card1: 1, card2: 1, card4: 1, card8: 1, card16: 1, card32: 1 };

mark = (card) => {
    card.style.backgroundColor = "#2ecc71" 
}
markID = (card) => {
    if(card.id == "ID1" && CheckCardLocks.card1){
        Age += 1;
        CheckCardLocks.card1 = 0;
    }
    else if(card.id == "ID2"&& CheckCardLocks.card2){
        Age += 2;
        CheckCardLocks.card2 = 0;
    }
    else if(card.id == "ID4"&& CheckCardLocks.card4){
        Age += 4;
        CheckCardLocks.card4 = 0;
    }
    else if(card.id == "ID8"&& CheckCardLocks.card8){
        Age += 8;
        CheckCardLocks.card8 = 0;
    }
    else if(card.id == "ID16"&& CheckCardLocks.card16){
        Age += 16;
        CheckCardLocks.card16 = 0;
    }
    if(card.id == "ID32"&& CheckCardLocks.card32){
        Age+=32;
        CheckCardLocks.card32 = 0;
    }
}
ChageTheme = () => {
    let colorNo = Math.floor(Math.random() * 10);
    themeBase.style.backgroundColor = colorThemes[colorNo];s
}

giveAge = () => {
    // alert(Age);    
    base.style.display = "none";
    document.body.innerHTML = `
        <div class="DisplayAge" >
        <h2 class="heading">
        Your Age is ${Age}
    </h2>
    </div>
    <button onclick="TryAgain()" id="TryAgain" class="confirm_btn">
    Try Again ?
    </button>
    `;
}

TryAgain = () => {
    window.location.reload();
}