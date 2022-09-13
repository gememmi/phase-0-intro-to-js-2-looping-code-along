const names = ["Emily", "Connor", "Jamie"];
const event = "surprise";

function writeCards(names, event){
    let messages = [];
    for(let i = 0; i < names.length; i++){
    const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
     messages.push(message); 
   
    }
    return messages;
}
writeCards(names,event)



function countDown() {
    let x = 10;
    while (x >= 0) {
      console.log(x--);
    }
   }
   countDown(x);