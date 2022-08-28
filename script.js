//strict mode
'use strict'

let hasDriversLicence = false
const passTest = true

if (passTest) hasDriversLicence = true
if (hasDriversLicence) console.log("i can drive")

//const interface = 'Audio'
//-----Functions------

function logger(){
    console.log('my name is shweta')
}
//calling,running,invoking
logger()

function fruitProcessor(apples, oranges) {
    console.log(apples,oranges)
    const juice = `Juice with ${apples} apples ${oranges} oranges`
    return juice
}

const appleJuice = fruitProcessor(5, 0)
console.log(appleJuice)

const appleOrange = fruitProcessor(4,7)
console.log(appleOrange)

const appleOranges =  fruitProcessor(8,3)
console.log(appleOranges)
