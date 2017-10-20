var express = require('express');
var router = express.Router();
var User = require('../module/user')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/',function(req,res){
  User.find({
    user:req.body.user,
    pw:req.body.pw
  },function(error,result){
      if(!error){
      	if(result.length>0){
      		 res.send({name:req.body.user,success:true})
      	}else{
      		res.send({success:false})
      	}
      
      }
  })
});

router.post('/reg',function(req,res){
  User.create({
    user:req.body.user,
    pw:req.body.pw
  },function(error,result){
      if(!error){
      		 res.send({success:true})
      }
  })
});

module.exports = router;
