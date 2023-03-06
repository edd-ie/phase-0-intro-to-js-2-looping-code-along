// Code your solutions in this file
for (let age = 30; age < 40; age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts){
    for (let i = 0; i < gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
}

wrapGifts(gifts);

// Code your solutions in this file


function writeCards(arr, event){
    const newArray = [];
    for (let i = 0; i < arr.length; i++){
        let msg = `Thank you, ${arr[i]}, for the wonderful ${event} gift!`;
        newArray.push(msg);
    }
    return newArray;
}

function countDown(pos){
    while (pos>=0){
        console.log(pos);
        pos--;
    }
}
