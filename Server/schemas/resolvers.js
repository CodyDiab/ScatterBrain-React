const { AuthenticationError } = require("apollo-server-express");
const {User,Subject} = require("../models/User");
const {signToken} = require('../utils/auth');

// create user
// login user
//log out user
//create subject
//get seubjects
//get single subject with resources 
//edit subject
//delete subject
//add resource
//edit resource
//delete resource 

const resolvers = {
    Query:{
        me: async(parent, args,context) => {
            if (context.user) {
                const userDate = await User.findOne({_id: context.user._id})
                .select('__v-password')
                .populate('subjects');

                return userData;
            }
        
            throw new AuthenticationError('Not logged in');

        },
        subjects: async (parent, {userId}) => {
            const params = userId ? { userId} : {};
            return Subject.find(params).sort({createdAt: -1});

        },
        subject: async(parent, {_id}) => {
            return Subject.findOne({_id});

        }


    },
    Mutation: {
        addUser: async(parent,args)=> {
            const user = await Uswer.create(args);
            const token = signToken(user);
            return{ token, user};

        },
        login: async (parent, {email,password})=>{
            const user = await User.findOne({email});
            if(!user){
                throw new AuthenticationError('Incorrect credentials');
            }
            const correctPw = await user.isCorrectPassword(password);
           if (!correctPw) {
               throw new AuthenticationError('Incorrect credentials')
           }
           const token = signToken(user);
           return{ token, user};
        },
        addSubject: async(parent, args, context) => {

        },
        editSubject: async(parent, args, context)=> {

        },
        addResource: async (parent, args,context) => {

        },
        editResource: async(parent, args, context)=> {

        },
        deleteSubject: async(parent, args, context)=> {

        },
        deleteResource: async(parent, args, context)=>{

        }
    }
};

module.exports = resolvers;
