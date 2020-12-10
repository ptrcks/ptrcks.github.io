var UserScore = 0;
var Compscore = 0;
const UserScore_span = document.getElementById("Userscore");
const CompScore_span = document.getElementById("Compscore");
const Annoncement_p = document.getElementById("annoncement");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function convert(choice){
    switch(choice){
    case "r":
        return "Rock"
    case "p":
        return "Paper"
    case "s":
        return "Scissors"
 
    }
}
 

function win(comp, user){
    UserScore += 1
    UserScore_span.innerHTML = UserScore
    comp = convert(comp)
    user = convert(user)
    Annoncement_p.innerHTML = user + " beats " + comp + ". You Win!"
}
 
function loose(comp, user){
    Compscore++
    CompScore_span.innerHTML = Compscore
    comp = convert(comp)
    user = convert(user)
    Annoncement_p.innerHTML = comp + " beats " + user + ". You Loose!"
    
}
 
function tie(comp){
    comp = convert(comp)
    Annoncement_p.innerHTML = "You both choose " + comp + ". Its a tie!"
 
}
function untoggle(){
    document.getElementById(choice).classList.toggle("active")
}
 
function Compchoice(){
    let choices = ["r","p","s"]
    choice = choices[Math.floor(Math.random() * 3)]
    document.getElementById(choice).classList.toggle("active")
    setTimeout(untoggle, 1000)
    return choice
}



function compare(userChoice){
    let compChoice = Compchoice()
    switch(compChoice+userChoice){
        case "rp":
            win("r","p")
            break
        case "sr":
            win("s","r")
            break
        case "ps":
            win("p","s")
            break;
        case "pr":
            loose("p","r")
            break
        case "rs":
            loose("r","s")
            break
        case "sp":
            loose("s","p")
            break;
        case "rr":
            tie("r")
            break
        case "pp":
            tie("p")
            break
        case "ss":
            tie("s")
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
