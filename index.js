// Your code here
function mapToNegativize(number) {
    let array = []
    for (let i = 0; i < number.length; i++) {
        array.push(-1 * number[i])
    };
    return array
}

function mapToNoChange(number) {
    let array = []
    for (let i = 0; i < number.length; i++) {
        array.push(number[i])
    };
    return array
}

function mapToDouble(number) {
    let array = []
    for (let i = 0; i < number.length; i++) {
    array.push(2 * number[i]) 
    };
    return array
}

function mapToSquare(number) {
    let array = []
    for (let i = 0; i < number.length; i++) {
    array.push(number[i] * number[i]) 
    };
    return array
}

//reduce

function reduceToTotal(number, startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i < number.length; i++) {
        total = total + number[i]
    };
    return total
}

function reduceToAllTrue(number) {
    for (let i = 0; i < number.length; i++) {
        if (!number[i]) return false
    };
    return true
}

function reduceToAnyTrue(number) {
    for (let i = 0; i < number.length; i++) {
        if (number[i]) return true
    };
    return false
}
