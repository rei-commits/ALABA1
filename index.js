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