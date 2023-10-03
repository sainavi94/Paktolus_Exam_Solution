
function deepEquals(a, b) {
    // Checks for a and b are same, if same returns true

    if (a === b) {
        return true;
    }

    // Checks for null and undefined, if they are null and undeifined returns true

    if (a === null || a === undefined) {
        return a === b;
    }

    // If both a and b are primitives(strings, numbers, booleans, symbols, or functions) return true if they are must equal

    if (typeof a === 'string' || typeof a === 'number' || typeof a === 'boolean' || typeof a === 'symbol' || typeof a === 'function') {
        return a === b;
    }

    // If they are both objects or Arrays compare their keys and values recursively

    if (typeof a === 'object') {
        if (a === null || b === null) {
            return a === b;
        }

        // If they are both objects, compare their keys and values recursively


        const keysA = Object.keys(a);
        const keysB = Object.keys(b);

        // If they have a different number of keys, return false

        if (keysA.length !== keysB.length) {
            return false;
        }

        // If any key or value is different, return false

        for (let key of keysA) {
            if (!keysB.includes(key) || !deepEquals(a[key], b[key])) return false;
        }

        // If all keys and values and datatypes are the same, return true

        return true;

    }

    // If all keys and values and datatypes are not same, return false
    
    return false;
}


// Testing


// const obj1 = { a: 1, b: { c: 2 } };
// const obj2 = { a: 1, b: { c: 2 } };
// const obj3 = { a: 1, b: { c: 3 } };

// console.log(deepEquals(obj1,obj2)); // true
// // console.log(deepEquals(obj1, obj3)); // false
// // console.log(deepEquals(42, 42)); // true
// console.log(deepEquals("hello", "world")); // false
// // console.log(deepEquals([1, 2, 3], [1, 2, 3])); // true
