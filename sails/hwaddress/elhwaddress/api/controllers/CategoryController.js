/**
 * CategoryController
 *
 * @description :: Server-side logic for managing categories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  create: function(req,res){
    Category.findOrCreate({name:req.body.name}).exec(function(err,category){
      res.send(category);
    });
  }

};

