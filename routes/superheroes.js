var express   = require('express');
var Router    = express.Router();
var Superhero = require('../models/superhero');
var Note      = require('../models/note')
var async     = require('async');

Router.route('/')
  .get(function(req,res){
    Superhero.find()
      .populate('notes')
      .exec((err, data) => {
        if(err) throw err;
        res.send({data})
      })
  })

  .post(function(req,res){
      var newSuper = new Superhero();
      newSuper.loadPower(req.body.superPower);
      newSuper.loadData(req.body);
      newSuper.save(function(err,data){
        if (err) {
          res.send(err);
        } else {
          res.json({ data, message: "Hero created" });
        }
      });
});
//POSTS AN ARRAY OF DATA ALL AT ONCE
Router.route('/multiplesupers')
  .post(function(req,res){
    //Works a bunch of things through all at once asynchronously
    var newHeros = [];
    async.each(req.body.data, function(hero, cb){ //works like for each method
      var newSuper = new Superhero();
      newSuper.loadPower(hero.superPower);
      newSuper.loadData(hero);

      newSuper.save()
        .then(function(newSuper){
          console.log(hero, 'EACH HERO SUCCESS');
          newHeros.push(newSuper);
          cb();
        }, function(err){
          if (err) throw cb(err);
        });
      }, function(err){
        if (err) throw err;
        res.json(newHeros);
      });
  });


  Router.route('/:superhero_id')
    .delete(function(req,res){
      Superhero.remove({_id: req.params.superhero_id}, function(err){
        if (err) {
          res.send(err);
        } else {
          res.json({message: "Super hero was removed"})
        }
      });
    })
    .put(function(req,res){
      Superhero.findById(req.params.superhero_id, function(err, hero){

        if (!hero) return res.status(404); //only in node.  404 is not found
        hero.loadPower(req.body.superPower);
        hero.loadData(req.body);
        hero.save(function(e){
          if (e) {
            res.send(e) //This is an internal server error
          } else {
            res.json({ hero, message: "Hero updated" });
          }
        })
      })
    })
    .get(function(req,res){
      Superhero.findById(req.params.superhero_id)
      .populate('notes')
      .exec((err,data) => {
        if (err) {
          res.send(err);
        } else {
          res.json(data);
        }
      });
    });

// route just for posting notes
// find a specific hero
// make a note
// add new note to hero
Router.route('/note/:superhero_id')
  .post((req, res) => {
    Superhero.findById(req.params.superhero_id, (err, hero) => {
      if (err) throw err;
      const newNote = new Note();
      newNote.loadData(req.body);
      newNote.save((err, savedNote) => {
        if(err) throw err;
        hero.notes.push(savedNote);
        hero.save((err, savedHero) => {
          if(err) throw err;
          res.send({ data: savedHero })
        })
      })
    })
  })

module.exports = Router;
