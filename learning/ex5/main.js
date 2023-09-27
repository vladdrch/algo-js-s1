let a = "Jean"
let b = "Paul"

function checkName(firstName, secondName) {
    if (firstName === secondName) {
        return true
    }
    else {
        return false
    }
}  
    
 let result = checkName(a, b)
console.log(result)

///////

function calcul(nombre1, nombre2) {
    return nombre1-nombre2
}
   
let solution = calcul(10,3)
console.log(solution)
