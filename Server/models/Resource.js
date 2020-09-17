const {Schema} = require('mongoose');

const resourceSchema = new Schema(
    {
        title:{
            type: String,
            required: true,
        },
        url:{
            type: String,
        
        },
        notes: {
            type:String,
        }
    }
)

module.export = resourceSchema;