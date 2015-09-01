/**
 * CommentController
 *
 * @description :: Server-side logic for managing comments
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  create: function(req, res){
      Zombie.findOne(req.params.id).then(function(zombie){
        Comment.create({
          comment: req.body.comment,
          zombie: zombie.id
        }).then(function(comment){
          // res.send(comment)
          res.redirect('/zombie/'+comment.zombie);
        })
      }).catch(function(err){
        res.send(err)
      })
    }

};

