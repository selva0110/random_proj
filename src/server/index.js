import express from 'express'
import mongoose from 'mongoose'
import auth from './routes/auth_route.js'
import morgan from 'morgan'

const url = "mongodb+srv://selvagowtham0110:Avles_0110.@sample.fjp2oye.mongodb.net/?retryWrites=true&w=majority";


const app = express();

const connect = async () => {
    try{
        mongoose.connect(url);
        console.log("MongoDB Connected");
    } catch (err) {
        throw err;
    }
}

app.use(morgan("tiny"));
app.use(express.json());
app.get("/", (req, res) => {
    res.send("home page");
})

app.use("/api/auth", auth);


app.listen(8000, (req, res) => {
    connect();
   console.log("backend connected");
} )