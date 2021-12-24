const express = require("express");
const app = express();
const users = require("./routes/users")
const auth = require("./routes/auth")

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/users")
    .then( () => {
        console.log("connected to the database ...")
    })
    .catch( (error) => {
        console.log("error ==> ", error.message)
    })

app.use(express.json())
app.use("/api/users",users)
app.use("/api/auth",auth)


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening at port ${port}`)
})





