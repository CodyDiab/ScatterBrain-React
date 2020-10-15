const {Schema, model} = require('mongoose');
const bcrypt = require('bcrypt');

//inport subject schema
// const subjectSchema = require('./Subject')

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            
        
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],

        },
        password: {
            type: String,
            required: true,
        },
        subjects: [{
            type: Schema.Types.ObjectId,
            ref: 'Subject'
        }],
    },
    {
        toJSON: {
            virtuals: true,
        }
    }
);
    // hash password
    userSchema.pre('save', async function (next) {
        if (this.isNew || this.isModified('password')) {
          const saltRounds = 10;
          this.password = await bcrypt.hash(this.password, saltRounds);
        }
      next();
    });
    
    // custom method to compare and validate password for logging in
    userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
    };
   
    
   // when we query a user, we'll also get another field called `subjectCount` with the number of saved subjects we have
    userSchema.virtual('subjectCount').get(function () {
    return this.subjects.length;
    });

const User = model('User', userSchema);

module.exports = User;
