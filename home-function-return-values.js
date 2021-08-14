function getSecretCode(value) {
    let code = value * 42;
    return code;
}

let message = getSecretCode(2);

console.log(message);