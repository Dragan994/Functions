let key = 42;

function getSecretCode(value) {

    let keyGenerator = function() {
        let key = 12;
        console.log(`In keyGenerator: ${key}`);
        return key;
    }

    let code = value * keyGenerator();
    console.log(`In getSecretCode: ${key}`)
    return code;
}

let secretCode = getSecretCode(2);

console.log(secretCode);