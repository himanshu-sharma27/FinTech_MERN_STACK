import express from 'express';
const app = express();

const Router = express.Router();
const productRouter = express.Router();
const userRouter = express.Router();    

productRouter.get("/list", (req,res) => {
    res.send("Products List")

});

userRouter.get("/list", (req,res) => {
    res.send("Users List")

});

app.use("/products", productRouter);
app.use("/users", userRouter);
app.listen(5000, () => console.log("Server Started"));

