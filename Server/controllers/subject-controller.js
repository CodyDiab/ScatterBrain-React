const {Subject} = require('../models');


module.exports = {
    async getSubjects(req,res){
     Subject.find({})
      .populate({
          path:'resources',
          select:'-__v'
      })
      .select('-__v')
      .sort({_id:-1})
      .then(subjectData=> res.json(subjectData))
      .catch(err =>{
          console.log(err);
          res.status(500).json(err)
      })
    },
    async getSingleSubject({params}, res){
        Subject.findOne({_id:params.id})
        .populate({
            path:'resources',
            select:'-__v'
        })
        .select('-__v')
        .then(subjectData => {
           if(!subjectData) {
               res.status(404).json({message: 'No subject with this id'});
               return;
           } 
           res.json(subjectData)
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },
    async createSubject({body}, res) {
        Subject.create(body)
        .then(subjectData => res.json(subjectData))
        .catch(err => res.status(400).json(err))
    },
    async updateSubject({params, body},res) {
        Subject.findOneAndUpdate({_id: params.id}, body,{new:true, runValidators:true})
        .then(subjectData=> {
            if(!subjectData){
                res.status(404).json({message: 'No subject with that id'});
                return;
            }
            res.json(subjectData);
        })
        .catch(err => res.status(400).json(err));
    },

}