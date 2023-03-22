const express = require('express');
const router = express.Router();
const { allUsers, singleUser, editUser, deleteUser, createUserJobsHistory } = require('../controllers/userController');
const { isAuthenticated, isAdmin } = require('../middleware/auth');


//user routes

// /api/allusers
router.get('/allusers', isAuthenticated, isAdmin, allUsers);
// /api/user/id
router.get('/user/:id', isAuthenticated, singleUser);
// /api/user/edit/id
router.put('/user/edit/:id', isAuthenticated, editUser);
// /api/admin/user/delete/id
router.delete('/admin/user/delete/:id', isAuthenticated, isAdmin, deleteUser);
// /api/user/jobhistory
router.post('/user/jobhistory', isAuthenticated, createUserJobsHistory);




module.exports = router;