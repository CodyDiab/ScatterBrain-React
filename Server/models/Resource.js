const {Schema} = require('mongoose');
const moment = require('moment');

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
        },
        
        createdAt: {
                type: Date,
                default: Date.now,
                get: timestamp => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a')
    
       }
    }
)

module.export = resourceSchema;