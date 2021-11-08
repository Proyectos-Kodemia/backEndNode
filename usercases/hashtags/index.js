const Tags = require("../../models/hashtags");

const getAll = async () => {
    return await Tags.model.find({}).exec();
};



module.exports ={
    getAll,
}
