// let favMovie = (name = "The Room", personName = "Moshe") => console.log(`My favorite movie is "${name}" and my name is ${personName}`)

// favMovie()

let getFirstName = name =>{return name.split(' ')[0]}

let getFirstNameConcise = name => name.split(' ')[0]

console.log(getFirstName('Moshe Rube'))
console.log(getFirstNameConcise('Moshe Rube'))

let doMath = (x, y) => {
    let obj = {
        exponent: x**y,
        product: x*y
    }
    return console.log(`I love this exponent ${obj.exponent}, but I also love this product ${obj.product}`)
}
doMath(2, 3)

let eating = (name, location, food) => {
    console.log(`${name} likes to eat ${food} in ${location}`)
}

let arr = ['Moshe', 'Chilton County', 'peaches']

eating(...arr)

let myName = 'Moshe'

let whatever = (parameter) => {
    let spread = [...parameter]
    console.log(spread)
    for (let i =0; i<spread.length; i++){
        console.log(spread[i])
    }
}
whatever(myName)
