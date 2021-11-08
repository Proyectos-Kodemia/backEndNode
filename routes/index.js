const userRouter=require("./usersRouter")
const postRouter=require("./postRouter")
const authRouter=require("./authRouter")
const hashTagsRouter=require("./hashtagsRouter")

const apiRouter=(app)=>{
    app.use("/users",userRouter);
    app.use("/posts",postRouter);
    app.use("/auth",authRouter);
    app.use("/tags",hashTagsRouter);
}

module.exports=apiRouter;