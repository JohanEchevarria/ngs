const theOneFunc = () => {
    console.log('Hello after 4 seconds');
};

const theOne = () => {
    console.log('Hello after 8 seconds');
};

setTimeout(theOneFunc, 4 * 1000);
setTimeout(theOne, 8 * 1000);

// Hello after 4 seconds

// Hello after 8 seconds

// You can define only ONE function
