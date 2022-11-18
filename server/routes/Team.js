let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');


//connect with team model

let Team = require('../models/teams');
let TeamController = require('../controller/ctrlTeam')
/*Read Operation*/
/* Get route for the Standings*/

router.get('/',TeamController.displayStandings);

/*Add Operation*/
/*Get route for displaying Add-Page -- Create Operation*/ 
router.get('/add',(req,res,next)=>{
    res.render('Team/add',{title:'Add Team'})
});
/*Post route for processing Add-Page -- Create Operation*/ 
router.post('/add', TeamController.processAddPage);



/*Edit Operation*/
/*Get route for displaying Edit Operation -- Create Operation*/ 
router.get('/edit/:id', TeamController.displayEditPage);
/*Post route for displaying Edit Operation -- Create Operation*/ 
router.get('/edit/:id', TeamController.processEditPage);




/*Delete Operation*/
/*Get to perform Delete Operartion -- Deletion */ 
router.get('/delete/:id',TeamController.performDelete);

/*Get route for processing Add-Page -- Create Operation*/ 
module.exports=router;