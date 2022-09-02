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

const calcTip = function(bill){
    return bill >= 50 && bill <=300 
    ? bill * 0.15
     : bill * 0.2
}

const bills = [125, 555, 44]
const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
const totals = [bills[0]+tip[0], bills[1]+tip[1], bills[2]+tip[2]]
console.log(bills,tip, totals)

//OBJECTS
const ShwetaArray = [
    'Shweta',
    'Mishra',
    2022-2004,
    'Software developer'
    ['Rob', 'nini', 'nash']
]
console.log(ShwetaArray)

const ShwetaObject = {
     firstName : 'Shweta',
      lastName : 'Mishra',
      age: 2022-2004,
      job:  'Softwaredeveloper',
      friends : ['Rob', 'nini', 'nash']
}

// console.log(ShwetaObject)
 console.log(ShwetaObject.lastName) // dot notation
// console.log(ShwetaObject['lastName'])

const nameKey = 'Name'
console.log(ShwetaObject['first' + nameKey]) // bracket notation
console.log(ShwetaObject['last' + nameKey])

const interestedIn = prompt('What do you want to know about Shweta? Choose')
console.log(ShwetaObject[interestedIn])

if(ShwetaObject[interestedIn]){
    console.log(ShwetaObject[interestedIn])
}else {
    console.log('wrong request')
}

ShwetaObject.location = 'India'
ShwetaObject['Twiiter'] = 'Shweta0408'
console.log(ShwetaObject)

console.log(`${ShwetaObject.firstName} has  ${ShwetaObject.friends.length} friends
 and her best friend is ${ShwetaObject.friends[0]}`)



const Shweta = {
    firstName: 'Shweta',
    lastName: 'Mishra',
    birthYear: 2004,
    job: 'Software Engineer',
    friends: ['Pragya','Lily','Jerry'],
    hasDriversLicence: true,

   //calcAge: function(birthYear){
   // return 2037 - birthYear
  // }

    calcAge: function() {
        this.age = 2022 - this.birthYear
        return this.age
    },

   getSummary: function() {
       return `${this.firstName} is a ${this.calcAge()} years of ${this.job} 
and she has ${this.hasDriversLicence ? 'drivers licence' : 'no drivers licence'}`
   }

}

console.log(Shweta.calcAge())
console.log(Shweta.age)
console.log(Shweta.getSummary())


//coding challenges

const markMiller = {
     firstName: 'Mark',
     lastName: 'Miller',
     mass: 78 ,
     height: 1.68,

     calcBMI:  function(){
       this.bmi = this.mass/this.height**2
       return this.bmi
     }


}


const johnMiller ={
    firstName: 'John',
    lastName: 'Miller',
    mass: 92 ,
    height: 1.95 ,

    calcBMI:  function(){
        this.bmi = this.mass/this.height**2
        return this.bmi
      }
 
 

}

const markBmi =  markMiller.calcBMI()
console.log(markMiller.bmi)

const johnBmi = johnMiller.calcBMI()
console.log(johnMiller.bmi)

if(markBmi > johnBmi){
    console.log(`${markMiller.firstName} ${markMiller.lastName} has higher BMI`)   
}
else {
    console.log(`${johnMiller.firstName} ${johnMiller.lastName} has higher BMI`)   
}





for(let i=1 ; i<=10 ; i++){
    console.log(`Lifting weights repetition ${i}`)
}


const types = []

const ShwetaArray = [
    'Shweta',
    'Mishra',
    2022-2004,
    'Teacher',
    ['Michael', 'Peter', 'Steven'],
    true
]

for (i=0 ; i<ShwetaArray.length ; i++){
    console.log(ShwetaArray[i], typeof ShwetaArray[i], types)
    types.push(typeof ShwetaArray[i])
}

const years = [1991, 2007, 1969, 2020,1995]
const ages = []

console.log('only numbers')
for (let i=0 ; i<years.length ; i++){
     ages.push(2022- years[i])
}
console.log(ages)

// continue and break
console.log('------only string------')
for ( let i =0 ; i< ShwetaArray.length ; i++){
    if(typeof ShwetaArray[i] !== 'string') continue

    console.log(ShwetaArray[i], typeof ShwetaArray[i])
}

console.log('------break with number------')
for ( let i =0 ; i< ShwetaArray.length ; i++){
    if(typeof ShwetaArray[i] === 'number') break

    console.log(ShwetaArray[i], typeof ShwetaArray[i])
}
*/

const ShwetaArray = [
    'Shweta',
    'Mishra',
    2022-2004,
    'Teacher',
    ['Michael', 'Peter', 'Steven'],
    true
]

for( let i=ShwetaArray.length - 1; i>=0 ; i-- ){
    console.log(i, ShwetaArray[i])
}


for (let excercise = 1 ; excercise < 4 ; excercise++){
    console.log(`-----Starting Excercise ${excercise}-------`)

    for (let rep = 1 ; rep < 6 ;  rep++){
        console.log(`Lifting Weight Repetition ${rep}`)
    }
}















