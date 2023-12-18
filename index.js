// Code your solutions in this file
function writeCards(names, event) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        let outMessage = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messages.push(outMessage);
    }
    return (messages);
}
writeCards(["Guadalupe", "Ollie", "Aki"], 'surprise');


function countDown (z) {
    while (z >= 0) {
        console.log(z);
        z--
    }
    
}

