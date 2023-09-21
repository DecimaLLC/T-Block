const express = require('express');
const authController = require('../controller/authController');
const blogController = require('../controller/blogController');
const auth = require('../middlewares/auth');
const commentController = require('../controller/commentController');


const router = express.Router();

// testing

router.get('/test',(req,res)=> {res.json({msg:'Working'})});



// user

// register

router.post('/register',authController.register);

// login

router.post('/login', authController.login);

// logout

router.post('/logout',auth,authController.logout);
// refresh

router.get('/refresh',authController.refresh);

// blog

// CRUD (create, read, update, delete)
// read all blogs
// read blog by ID

//create 
router.post('/blog',auth,blogController.create);
//get all
router.get('/blog/all',auth,blogController.getAll);
//get blog by id
router.get('/blog/:id', auth, blogController.getById);
// router.get('/blog/:id', auth, blogController.getById);
// blog update
router.put('/blog',auth, blogController.update);
//delete
router.delete('/blog/:id',auth,blogController.delete);


// comments

// create comment
router.post('/comment', auth, commentController.create);

// read comments by blog id
router.get('/comment/:id', auth, commentController.getById);


module.exports = router;