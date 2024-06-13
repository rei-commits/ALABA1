//Global variable to count the number of function calls before  stack overflow
let counter = 0

// adding a recursive function that increments the counter and calls itself
function incrementAndCall() {
    counter++ //incrementing the counter
    incrementAndCall() // calling it on its own recursively
}

try {
    incrementAndCall() // calling the function
} catch (error) {
    console.log(`Stack overflow occurred at count:`, counter)
}

//Part 2
// write a recursive function that completely flattens the array
function flattenArray(arr, result = []) {
    arr.forEach(item => {
        if (Array.isArray(item)) {
            counter++
            return () => flattenArray(item, result)
        } else {
            result.push(item)
        }
    })
    return result
}

//Trampoline function to handle recusrion even though its not needed
function trampoline(fn) {
    return function (...args) {
        let result = fn(...args)
        while (typeof result === 'function') {
            result = result()
        }
        return result
    }
}

// Now a tramp for the recursive func
const trampolinedFlatten = trampoline(flattenArray)

//Testing the function
const nestedArray = [1, [2, [3, 4], 5], 6, [7, [8, 9, [10, 11]]]]

//flatten the array using trasmp recursive func
const flattenedArray = trampolinedFlatten(nestedArray)
console.log(flattenedArray) // [1, 2, 3, 4,



