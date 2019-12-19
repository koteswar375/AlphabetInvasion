 const getRandomString = () => {
    return String.fromCharCode( 
        Math.random() * ('z'.charCodeAt(0) - 'a'.charCodeAt(0)) + 'a'.charCodeAt(0) 
    );
}

module.exports = {getRandomString};

