//Henter elementer fr DOM
let topEl = document.querySelector('.top')
let leftEl = document.querySelector('.left')
let rightEl = document.querySelector('.right')





//sjekker om tall eksisterer i localStorage
if(!localStorage.tall){
    localStorage.tall = 0

}

topEl.innerHTML = localStorage.tall


//letter til lyttere
leftEl.addEventListener('click', decreaseNumber)
rightEl.addEventListener('click', increaseNumber)



//funksjoner
function decreaseNumber(){
    localStorage.tall = Number(localStorage.tall) - 1

    topEl.innerHTML = localStorage.tall


}

function increaseNumber(){
    localStorage.tall = Number(localStorage.tall) + 1
    


    topEl.innerHTML = localStorage.tall

}
