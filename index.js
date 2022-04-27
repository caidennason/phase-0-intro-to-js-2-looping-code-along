// Code your solutions in this file


function writeCards(arrayOfNames, events){
    let newArr = []
    for (let i = 0; i < arrayOfNames.length; i++){
        newArr.push(`Thank you, ${arrayOfNames[i]}, for the wonderful ${events} gift!`)
    }
    return newArr
}

writeCards()

function countDown(n){
    let count = n
    while (count >= 0){
        console.log(count--)
    }
}