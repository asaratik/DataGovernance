// app/routes.js
module.exports = function(app, passport) {

	app.get('/', function(req, res) {
		res.render('index.ejs'); // load the index.ejs file
	});

	app.get('/login', function(req, res) {
		// render the page and pass in any flash data if it exists
		res.render('login.ejs', { message: req.flash('loginMessage') });
	});

	// process the login form
	app.post('/login', passport.authenticate('local-login', {
            successRedirect : '/home', // redirect to the secure profile section
            failureRedirect : '/login', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
		}),
        function(req, res) {
            console.log("hello");

            if (req.body.remember) {
              req.session.cookie.maxAge = 1000 * 60 * 3;
            } else {
              req.session.cookie.expires = false;
            }
        
    res.redirect('/home');
    });

    app.get('/home', isLoggedIn, function(req, res){
    	    if(req.user.username==='admin'){
        var hideroles='visible';
    }else{
    	var hideroles='none';
    }
    	res.render('home.ejs', {
			user : req.user.id,
			tag : '',
			hideroles:hideroles
		});
    });

    app.get('/roles', isLoggedIn, function(req, res){
    	 if(req.user.username==='admin'){
        var hideroles='visible';
    }else{
    	var hideroles='none';
    }
    	res.render('roles.ejs', {
			user : req.user.id,
			tag : 'roles',
			hideroles:hideroles
		});
    });

    app.get('/data', isLoggedIn, function(req, res){
    	 if(req.user.username==='admin'){
        var hideroles='visible';
    }else{
    	var hideroles='none';
    }
    	res.render('data.ejs', {
			user : req.user.id,
			tag : 'data',
			hideroles:hideroles
		});
    });

    app.get('/tableData', isLoggedIn, function(req, res){
    	 if(req.user.username==='admin'){
        var hideroles='visible';
    }else{
    	var hideroles='none';
    }
    	res.render('tableData.ejs', {
			user : req.user.id,
			tag : 'tableData',
			hideroles:hideroles
		});
    });

    app.get('/user', isLoggedIn, function(req, res){
    	 if(req.user.username==='admin'){
        var hideroles='visible';
    }else{
    	var hideroles='none';
    }
    	res.render('user.ejs', {
			user : req.user.id,
			tag : 'user',
			hideroles:hideroles
		});
    });

	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});
};

// route middleware to make sure
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
}
