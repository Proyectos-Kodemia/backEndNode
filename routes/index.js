const userRouter=require("./usersRouter")
const postRouter=require("./postRouter")
const authRouter=require("./authRouter")

const apiRouter=(app)=>{
    app.use("/users",userRouter);
    // app.use("/posts",postRouter);
    // app.use("/auth",authRouter);
}

module.exports=apiRouter;