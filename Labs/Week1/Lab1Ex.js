
console.log("---Execise 1---")

function capitalizeWords(str) {
    return str
        .split(' ') 
        .map(word => 
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() 
        )
        .join(' ');
}

console.log(capitalizeWords("hello world")); 
console.log(capitalizeWords("the quick brown fox")); 



console.log("---Execise 2---")

function max(a, b, c) {
    let largest = a;

    if (b > largest) {
        largest = b;
    }

    if (c > largest) {
        largest = c;
    }

    return largest;
}

console.log(max(1, 0, 1)); 
console.log(max(0, -10, -20)); 
console.log(max(1000, 510, 440)); 


console.log("---Execise 3---")

function right(str) {
    if (str.length < 3) {
        return str;
    }
    return str.slice(-3) + str.slice(0, -3);
}

console.log(right("Python"));      
console.log(right("JavaScript"));  
console.log(right("Hi"));          


console.log("---Execise 4---")


function angleType(angle) {
    if (angle > 0 && angle < 90) {
        return 'Acute angle';
    } else if (angle === 90) {
        return 'Right angle';
    } else if (angle > 90 && angle < 180) {
        return 'Obtuse angle';
    } else if (angle === 180) {
        return 'Straight angle';
    } else {
        return 'Invalid angle'; // For angles not between 0 and 180
    }
}


console.log(angleType(47))
console.log(angleType(90))
console.log(angleType(145))
console.log(angleType(180))