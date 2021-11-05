const mongoose=require("mongoose");
const config=require("./config");

const connect=()=>{
    new Promise((res, reject)=>{
        mongoose.connect(
            //falta la conexion a la base de datos
            
            {useNewUrlParser:true}
        );
    })

    const db=mongoose.connection;
    db.on("open",()=>{
        console.warn("Connection succesfull");
        res(mongoose);
    });

    db.on("error",(error)=>{
        console.error("Connection failed", error)
        reject(error);
    })
}

module.exports={connect};