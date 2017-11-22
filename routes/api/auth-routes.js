const router = require('express').Router();
const passport = require('passport');
const heroku = true;
let url;
if(heroku){
     url = 'https://calm-hamlet-36261.herokuapp.com/home';
}else{
     url = 'http://localhost:3000/home';
}
// import CONFIG from "../../config-env.js";
// auth login
router.get('/login', (req, res) => {
    // res.render('login', { user: req.user });
    console.log("got to the login " + req.user);
    res.send(req.user);
});

// auth logout
router.get('/logout', (req, res) => {
    // handle with passport
    // res.send('logging out');
    // builtin passport function amazing  
    req.logout();
    res.redirect(url);
});

// auth with google+
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}, function(){
}));

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get('/google/redirect', passport.authenticate('google'), function (req, res) {
    res.redirect(url);
});
// }), (req, res) => {
//     // res.send(req.user);
//     res.red
// });

module.exports = router;
