const User=require("../../models/users");
const encrypt=require("../../lib/crypt");

const create=async (dataUser)=>{
    const {name,username,password,email,role}=dataUser;
    const hash=await encrypt.hashPassword(password);

    const user=new User({name,username,password:hash,email,role});
    const savedUser=await user.save();
}