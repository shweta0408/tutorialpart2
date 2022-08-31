//strict mode
// 'use strict'

// let hasDriversLicence = false
// const passTest = true

// if (passTest) hasDriversLicence = true
// if (hasDriversLicence) console.log("i can drive car")

// //const interface = 'Audio'
// //-----Functions------

// function logger(){
//     console.log('my name is shweta')
// }
// //calling,running,invoking
// logger()

// function fruitProcessor(apples, oranges) {
//     console.log(apples,oranges)
//     const juice = `Juice with ${apples} apples ${oranges} oranges`
//     return juice
// }

// const appleJuice = fruitProcessor(5, 0)
// console.log(appleJuice)

// const appleOrange = fruitProcessor(4,7)
// console.log(appleOrange)

// const appleOranges =  fruitProcessor(5,3)
// console.log(appleOranges)

// const appleOrangesFruit =  fruitProcessor(5,2)
// console.log(appleOrangesFruit)

// //FUNCTION DECLARATION
// function calcAge(birthYear){
//     return 2022 - birthYear
// }
// const calcBirth1 = calcAge(2006)

// FUNCTION EXPRESSION
// const calcBirth = function (birthYear){
//     return 2022-birthYear
// }
// const calcBirth4 = calcBirth(2004)
// console.log(calcBirth4, calcBirth1)

//const calcBirth = calcAge(2004)
//console.log(calcBirth)


/*ARROW FUNCTION
 const calcAge = birthYear => 2022-birthYear
 const myAge = calcAge(2004)
 console.log(myAge)

 const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022-birthYear
    const retirement = 65 - age
    //return retirement
    return `${firstName} retires in ${retirement} years `
 }

 console.log(yearsUntilRetirement(2004,'Shweta'))
 console.log(yearsUntilRetirement(2002,'Pragya'))

 */

 /*
 function cutFruitPieces(fruit){
    return fruit * 4
 } 

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples)
    const orangesPieces = cutFruitPieces(oranges)

const juice = `Juice with ${apples} apples cut into ${applePieces} pieces
 and ${oranges} oranges cut into ${orangesPieces} pieces`

 return juice
 }

 console.log(fruitProcessor(3,2))
*/

const calcAge = function(birthYear) {
    return 2022-birthYear
}

const yearsUntilRetirement = function (birthYear, firstName)
{
    const age = calcAge(birthYear)
    const retirement = 65 - age

     if (retirement >0){
        return retirement
     }else {
        return -1
     }


//return retirement
   // return `${firstName} retires in ${retirement} years `
 }

 console.log(yearsUntilRetirement(2004,'Shweta'))
 console.log(yearsUntilRetirement(1940,'testPeople'))

 