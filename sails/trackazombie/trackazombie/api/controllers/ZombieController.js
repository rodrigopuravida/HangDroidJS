/**
 * ZombieController
 *
 * @description :: Server-side logic for managing zombies
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

  module.exports = {

  //GET /zombie -- lists all zombies
  new: function(req,res){
    console.log("hi");
      res.view('zombie/new');
  },

  //GET /zombie -- lists all zombies
  index: function(req,res){
    Zombie.find().then(function(zombies){
      res.view('zombie/index',{zombies:zombies});
    }).catch(function(err){
      res.send(err);
    });
  },



  //POST /zombie  -- create a new zombie
  create: function(req, res) {
    Zombie.create({
      gender: req.body.gender,
      speed: req.body.speed
    }).then(function(zombie){
      res.redirect('/zombie');
    }).catch(function(err){
      res.send(err);
    });
  },

  //GET /zombie/:id -- displays details about a zombie
  show: function(req,res){
    Zombie.findOne(req.params.id).then(function(zombie){
      res.view('zombie/show',{zombie:zombie});
    });
  }

};