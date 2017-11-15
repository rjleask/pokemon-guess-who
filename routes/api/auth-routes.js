const router = require('express').Router();
const passport = require('passport');

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
    res.redirect('/');
});

// auth with google+
router.get('/google', passport.authenticate('google', {
    scope: ['profile']
}, function(){
    console.log("WTF");
}));

// callback route for google to redirect to
// hand control to passport to use code to grab profile info
router.get('/google/redirect', passport.authenticate('google'), function (req, res) {
    console.log("WTF");
    res.redirect("http://localhost:3000/");
});
// }), (req, res) => {
//     // res.send(req.user);
//     res.red
// });

module.exports = router;
