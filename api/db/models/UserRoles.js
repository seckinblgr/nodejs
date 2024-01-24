const mongoose = require("mongoose")

const schema = mongoose.Schema({
  role_id : {type: mongoose.SchemaTypes.ObjectId, required:true},
  user_id : {type: mongoose.SchemaTypes.ObjectId, required:true},

},{
    versionKey: false,
    timestamps:{
        createdAt :"created_at",
        updatedAt :"updated_at"
    }
}
)

class UserRoles extends mongoose.model {}

schema.loadClass(Roles)
module.exports = mongoose.model("user_roles",schema)