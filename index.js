const express =require("express");
const dbConnect=require("./config/db");
const userRouter =require("./routes/user.route")
const cors =require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/", (req, res)=>{
    res.send({messaage :"Started"})
    
})

app.use("/user",userRouter);

app.listen(8090, ()=>{
    console.log("Server is running on port 8090")
    dbConnect();
})