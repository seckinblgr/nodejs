const mongoose = require("mongoose")

const schema = mongoose.Schema({
  level: String,
  email: String,
  location: String,
  proc_type:String,
  log:String
},{
    versionKey: false,
    timestamps:{
        createdAt :"created_at",
        updatedAt :"updated_at"
    }
}
)

class AuditLogs extends mongoose.model {}

schema.loadClass(Roles)
module.exports = mongoose.model("audit_logs",schema)