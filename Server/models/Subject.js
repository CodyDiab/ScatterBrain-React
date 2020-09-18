const {Schema,model} = require('mongoose');
const moment = require('moment');
//import resource schema
const resourceSchema= require('./Resource')

const subjectSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        resources: [resourceSchema],
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
module.export = subjectSchema;