const jwt = require("jsonwebtoken");

function auth(req, res, next){

    const token = req.header("x-auth-token");

    if (!token) return res.status(401).send("Access denied. No token found.");

    try{
        const decoded = jwt.verify(token,"mySecureKey");
        req.user = decoded;
        next();
    }catch(error){
        return res.status(400).send("Invalid token");
    }
    
}

module.exports = auth;