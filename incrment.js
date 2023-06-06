

let getWorkout = document.getElementById("count_workout")
let save_el =  document.getElementById("save-el")
let count = 0
function increment()
{
    count = count+1
    getWorkout.innerText = count
    
}

function clearr()
{    
    getWorkout.innerText= 0
    count = 0

}
function save(){

    let newCount = count + " - "

    save_el.innerText += newCount

}


