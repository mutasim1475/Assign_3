let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const teams = require('../models/teams');

//connect with team model

let Team = require('../models/teams');

module.exports.displayStandings = (req,res,next)=>{
    Team.find((err, team)=>{
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('Team/Team',{
                title:'Standings', 
                Team: team
            })
        }
    });
}


module.exports.displayAddPage = (req,res,next)=>{
    res.render('Team/add',{title:'Add Team'})
}

module.exports.processAddPage = (req,res,next)=>{
    let newTeam  = Team ({
        "name":req.body.name,
        "W":req.body.W,
        "L":req.body.L,
        "GF":req.body.GF,
        "GA":req.body.GA
    })

    Team.create(newTeam,(err,Team) =>{
    if(err)
    {
        console.log(err);
        res.end(err);
    }
    else
    {
        res.redirect('/Standings')
    }
    
    });
}


module.exports.displayEditPage = (req,res,next)=>{
    let id = req.params.id;
    Team.findById(id,(err,teamToEdit) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.render('Team/edit',{title:'Edit Team', team:teamToEdit});
        }    
    })

} 


module.exports.processEditPage = (req,res,next)=>{
    let id = req.params.id;
    let updateTeam = Team({
        "_id":id,
        "name":req.body.name,
        "W":req.body.W,
        "L":req.body.L,
        "GF":req.body.GF,
        "GA":req.body.GA
    })
    Team.updateOne({_id:id},updateTeam,(err) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/Standings');
        }
    });
}

module.exports.performDelete =(req,res,next)=>{
    let id = req.params.id;
    Team.deleteOne({_id:id},(err)=>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/Standings');
        }

    });
} 