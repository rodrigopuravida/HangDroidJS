/**
 * PersonController
 *
 * @description :: Server-side logic for managing people
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  addCategorybyName: function(req,res){
    Person.findOne(req.params.id).then(function(person){
      Category.findOrCreate({where: {name:req.body.name}}).then(function(category){
        person.categories.add(category);
        person.save(function(person){
          console.log(person)
          res.send(person);
        });
      });
    });
  }

};
