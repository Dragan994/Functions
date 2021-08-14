// function showMessage(message, anotherMessage) {
//     console.log(message, anotherMessage);
// }

// showMessage("First Message", "Second Message");

let myFunction = function(message = null,firstName = "John") {
    if(message === null){
        throw Error("Set function parameter!");
    }
    console.log(message);
    console.log(firstName);
}

myFunction("Hello");