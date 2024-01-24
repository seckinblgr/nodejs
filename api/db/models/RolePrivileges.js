const mongoose = require("mongoose")

const schema = mongoose.Schema({
  permission: {type: String, default:true},
  role_id : {type: mongoose.SchemaTypes.ObjectId, required:true},
  created_by:{type: mongoose.SchemaTypes.ObjectId,required:true}
},{
    versionKey: false,
    timestamps:{
        createdAt :"created_at",
        updatedAt :"updated_at"
    }
}
)

class RolePrivileges extends mongoose.model {}

schema.loadClass(Roles)
module.exports = mongoose.model("role_privileges",schema)