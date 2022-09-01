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

//  console.log(yearsUntilRetirement(2004,'Shweta'))
//  console.log(yearsUntilRetirement(1940,'testPeople'))


// //coding challenge


// const calcAverage = (score1, score2, score3) => (score1+score2+score3)/3
// console.log(calcAverage(2,3,7))

// const scoreDolphins = calcAverage(44,23,71)
// const scoreKoalas = calcAverage(65,54,49)

// console.log(scoreDolphins,scoreKoalas)

// const  checkWinner = function(avgDolphins, avgKoalas)
// {
//    if (avgDolphins >= 2* avgKoalas){
//         console.log(`winner is Dolphin with ${avgDolphins} vs ${avgKoalas}`)
//    } else if (avgKoalas >= 2* avgDolphins){
//       console.log(`winner is koala with ${avgKoalas} vs. ${avgDolphins}`)
//    } else {
//     console.log("no one is winner")
//    }

// }

// checkWinner(scoreDolphins, scoreKoalas)
// checkWinner(700,114)

/*const calcAverage = (a,b,c) => (a,b,c)/3

const scoreDolphins = calcAverage(33,44,56)
const scoreKoala  = calcAverage(23,67,45)

const checkWinner = function (avgDolphins,avgKoalas){

    if (avgDolphins >= 2* avgKoalas){
        console.log(`Dolphin wins with 
        ${avgDolphins} vs ${avgKoalas}`)
    } 
    else if (avgKoalas >= 2* avgDolphins){
        console.log( `Koala wins with score 
        ${avgKoalas} vs ${avgDolphins}`)
    } else {
        console.log("no team wins")
    }
       
}

checkWinner(scoreDolphins,scoreKoala)



const years = new Array(1991, 1992, 1993,1994)

console.log(friends[0])
console.log(friends.length)
console.log(friends[friends.length -1])

friends[2] = 'Vinnie'
console.log(friends)

const Shweta = ['Shweta', 'Mishra', 2022-2004,'teacher',friends]
console.log(Shweta)
console.log(Shweta.length)

//Exercise
 
const calcuAge = function(birthYears) {
    return 2037 - birthYears
}
const year = [1990, 1967, 2002, 2010]


const agee1 = calcuAge(year[3])
console.log(agee1)

const ages = [calcuAge(year[3])]

*/


const friends = ["Michel", "Steve", "Rob"]
friends.push('Mike') //ADDS to the end
console.log(friends)

friends.unshift('sherry') //ADDS to the begining
console.log(friends)

friends.pop() //REMOVE last element
console.log(friends)

friends.shift() //REMOVE first element
console.log(friends)

console.log(friends.indexOf('Steve'))
console.log(friends.indexOf('lily')) // -1 output

console.log(friends.includes('Steve')) // true
console.log(friends.includes('lily')) // false output 

// it does not do type coercion means number 23
// is different from  string '23'

if(friends.includes('Rob')){
    console.log('You have a friend called Rob')
}

//coding challenge 




