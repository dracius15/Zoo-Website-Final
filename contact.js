const express= require('express');
const mysql2 = require('mysql2');
const session = require('express-session');
// const path = require ('path');

const db=  mysql2.createConnection({
    host:'localhost',
    user:'root',
    password:'Div@m123',
    database:'CONTACT'

})

db.connect(function(error){
    if (error) throw error;
    console.log("CONNECTED");
})

const contact=express();

contact.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

contact.use(express.json());
contact.use(express.urlencoded());
contact.use(express.static('public'));


contact.get('/zoowebsite',function(req,res){

    res.sendFile(__dirname+'/index.html');
});

// contact.get('/login.html',function(req,res){

//     res.sendFile(__dirname+'/login.html');
// });

contact.get('/index.html',function(req,res){

    res.sendFile(__dirname+'/index.html');
});

contact.get('/donation.html',function(req,res){

    res.sendFile(__dirname+'/donation.html');
});

contact.get('/signup.html',function(req,res){

    res.sendFile(__dirname+'/signup.html');
});

contact.get('/chameleon.html',function(req,res){

    res.sendFile(__dirname+'/chameleon.html');
});

contact.get('/zebra.html',function(req,res){

    res.sendFile(__dirname+'/zebra.html');
});

contact.get('/giraffe.html',function(req,res){

    res.sendFile(__dirname+'/giraffe.html');
});

contact.get('/monkey.html',function(req,res){

    res.sendFile(__dirname+'/monkey.html');
});

contact.get('/index.htmldonation.html',function(req,res){

    res.sendFile(__dirname+'/donation.html');
});

contact.post('/formPost',function(req,res){
    var contents=(req.body);
    let sql="INSERT INTO contact_info SET ?"
    let query = db.query(sql,contents,function(error,result)
    {
        if(error) throw error;
        res.sendFile(__dirname+'/index.html');
        console.log(result);
    })

    console.log(req.body);

})

contact.post('/formpost2', function(request, response) {
	// Capture the input fields
	let username = request.body.email;
	let password = request.body.password;
	// Ensure the input fields exists and are not empty
	if (username && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		db.query('SELECT * FROM login WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			else if (results.length > 0) {
				// Authenticate the user
				request.session.loggedin = true;
				request.session.username = username;
				// Redirect to home page
				contact.get('/login.html',function(req,res){

					res.sendFile(__dirname+'/login.html');
				});
				response.sendFile(__dirname+'/login.html');
			}  else {
				response.sendFile(__dirname+'/incorrect.html');
			}			
			// response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		// response.end();
	}
})

contact.post('/formPost3',function(req,res){
    var contents=(req.body);
    let sql="INSERT INTO login SET ?"
    let query = db.query(sql,contents,function(error,result)
    {
        if(error) throw error;
        res.sendFile(__dirname+'/thankyou.html');
        console.log(result);
    })

    console.log(req.body);

})

contact.post('/formPost4',function(req,res){
    var contents=(req.body);
    let sql="INSERT INTO payment_info SET ?"
    let query = db.query(sql,contents,function(error,result)
    {
        if(error) throw error;
        res.sendFile(__dirname+'/thankyoutickets.html');
        console.log(result);
    })

    console.log(req.body);

})



contact.listen('5000',function(){
    console.log("Connection made at port 5000");
})