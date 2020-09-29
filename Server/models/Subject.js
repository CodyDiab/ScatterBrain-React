const {Schema,model} = require('mongoose');
const moment = require('moment');
//import resource schema
const resourceSchema= require('./Resource')

const subjectSchema = new Schema(
    {   
        userId:{
           type: String,
           rewuired:true
        },
        title: {
            type: String,
            required: true,
        },
        resources: [resourceSchema],
    
    
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a')

        }
    
    },
    {
     toJSON: {
          virtuals: true,  
        },
    }
);

subjectSchema.virtual('resourceCount').get(function () {
    return this.resources.length;
})

const Subject = model('Subject',subjectSchema)
module.exports = Subject;