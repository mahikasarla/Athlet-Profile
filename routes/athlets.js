var express = require('express');
var router = express.Router();

var mongojs =require('mongojs');
var db = mongojs('mongodb://mahi:mLab5@ds135757.mlab.com:35757/athlet',['athlet']);

//var Athlet = require('../models/athlets');


// for all athlets
router.get('/athlets', function(req, res, next){
    db.athlet.find(function(err, athlets){
        if(err){
            res.send(err);
        }
        res.json(athlets);
    });
});

//for single athlet
router.get('/athlet/:id', function(req, res, next){
    db.athlet.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, athlet){
        if(err){
            res.send(err);
        }
        res.json(athlet);
    });
});

//Post athlet
router.post('/athlet', function(req, res, next){
        var athlet =req.body;
        if(false)
        {

               res.status(400);
               res.json({
                error:'Bad input'
               });
         }
         else{
            db.athlet.save(athlet, function(err, athlet){
                 if(err){
                res.send(err);
                 }
                 res.json(athlet);
            });
         }
});

//Delete
router.delete('/athlet/:id', function(req, res, next){
    db.athlet.remove({_id: mongojs.ObjectId(req.params.id)}, function(err, athlet){
        if(err){
            res.send(err);
        }
        res.json(athlet);
    });
});

//Update
router.put('/athlet/:id', function(req, res, next){

    var athlet = req.body;
    var updAthlet = {};

    if(athlet.name){
        updAthlet.name = athlet.name;
    }
    if(athlet.dateofbirth){
        updAthlet.dateofbirth =athlet.dateofbirth;
    }

    if(athlet.nationality){
            updAthlet.nationality = athlet.nationality;
    }

    if(athlet.location){
                updAthlet.location = athlet.location;
            }
    if(athlet.nationality){
                updAthlet.nationality = athlet.nationality;
            }
    if(athlet.association){
               updAthlet.association = athlet.association;
           }
    if(athlet.about){
                   updAthlet.about = athlet.about;
               }
    if(athlet.team){
                   updAthlet.team = athlet.team;
               }
    if(athlet.interests){
                       updAthlet.interests = athlet.interests;
                   }
    if(athlet.charities){
                     updAthlet.charities = athlet.charities;
                 }
    if(athlet.pets){
                     updAthlet.pets = athlet.pets;
                 }
    if(athlet.drinksalcohol){
                       updAthlet.drinksalcohol = athlet.drinksalcohol;
                   }
    if(athlet.married){
                       updAthlet.married = athlet.married;
                   }

    if(!updAthlet){
    res.status(400);
        res.json(
        {
        'error':"Bad input"
        }
        );
    }
    else{
    db.athlet.update({_id: mongojs.ObjectId(req.params.id)}, updAthlet, {}, function(err, athlet){
        if(err){
            res.send(err);
        }
        res.json({
        msg:"updated"
        });
    });
    }
});

    module.exports = router;