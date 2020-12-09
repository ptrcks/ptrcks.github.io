var UserScore = 0;
var Compscore = 0;
const UserScore_span = document.getElementById("Userscore");
const CompScore_span = document.getElementById("Compscore");
const Annoncement_p = document.getElementById("annoncement");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function win(){
    UserScore += 1
    UserScore_span.innerHTML = UserScore
    Annoncement_p.innerHTML = "You Win"
}

function loose(){
    Compscore++
    CompScore_span.innerHTML = Compscore
    Annoncement_p.innerHTML = "You Loose"
}

function draw(){
    Annoncement_p.innerHTML = "Its a draw"

}

function Compchoice(){
    let choices = ["r","p","s"]
    choice = choices[Math.floor(Math.random() * 3)]
    return choice
}


function compare(userChoice){
    let compChoice = Compchoice()
    switch(compChoice+userChoice){
        case "rp":
        case "sr":
        case "ps":
            win()
            console.log("win")
            break;
        case "pr":
        case "rs":
        case "sp":
            loose()
            console.log("loose")
            break;
        case "rr":
        case "pp":
        case "ss":
            draw()
            console.log("draw")
        break;
    }
}


function tracker(){
    rock_div.addEventListener("click", function rock(){ 
        compare("r")
    })

    paper_div.addEventListener("click", function paper(){
        compare("p")
    })

    scissors_div.addEventListener("click", function scissors(){ 
        compare("s")
    })

}

tracker()
