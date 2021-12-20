function loggerrr (req, res, next) {
    console.log("Third middleware ...");
    next();
}

module.exports = loggerrr;