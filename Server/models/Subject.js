const {Schema} = require('mongoose');

//import resource schema

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

module.export = subjectSchema;