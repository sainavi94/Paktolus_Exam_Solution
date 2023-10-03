function deepEquals(a, b) {
    // Checks for a and b are same, if same returns true
    if (typeof a !== typeof b) {
        return false;
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
    if (Array.isArray(a)) {
        if (!Array.isArray(b) || a.length !== b.length) {
            return false;
        }

        // If they are both objects, compare their keys and values recursively

        const keysA = Object.keys(a);
        const keysB = Object.keys(b);

        // If they have a different number of keys, return false
        if (keysA.length !== keysB.length) {
            return false;
        }

        // If any key or value is different, return false
        for (let i = 0; i < keysA.length; i++) {
            if (!keysB.includes(keysA[i]) || !deepEquals(a[keysA[i]], b[keysA[i]])) {
                return false;
            }
        }

        // If all keys and values and datatypes are the same, return true
        return true;
    }
}
