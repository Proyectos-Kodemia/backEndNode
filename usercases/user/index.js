const User=require("../../models/users");
const encrypt=require("../../lib/crypt");

const create=async (dataUser)=>{
    const {name,username,password,email,role}=dataUser;
    const hash=await encrypt.hashPassword(password);

    const user=new User.model ({name,username,password:hash,email,role});
    const savedUser=await user.save();
    return savedUser;
};

const get = async () => {
    return await User.model.find({}).exec();
};

const getById = async (idUser) => {
    return await User.model.findByID(idUser).exec();
};

const getByUser = async (user) => {
    return await User.model.findOne(user).exec();
};

const authenticate = async (user, password) => {
    const hash=user.password;
    return await encrypt.verifyPassword(password,hash);
};

// Proceso LogIn de usuarios
const logIn = async(userName,password)=>{
    const userObject = await getByUserName({userName})
    const hash = userObject.password
    const isValid = await encrypt.verifyPassword(password,hash)

    if(isValid){
        const payload = {
            "id":userObject._id,
            "role":userObject.role
        }
        console.log(payload)
        const token = await jwt.sign(payload)
        return token
    }else{
        error()
    }
    
    

}



module.exports = { create, get, getById, getByUser, authenticate};