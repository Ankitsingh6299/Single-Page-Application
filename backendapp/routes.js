var About = require('./models/about');
var Contact = require('./models/contact');

module.exports = function (expobj) {

    expobj.get('/api/abouts', function (req, res) {
        About.find(function (err, abouts) {
            if (err)
                res.send(err);

            res.json(abouts);
        });
    });
    //showing records



    expobj.post('/api/abouts', (req, res) => {
        console.log("First Name :" + req.body.first_name + '\nLast name : ' + req.body.last_name + '\nPhoneNo :' + req.body.phone);
        let newContact = new Contact({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            phone: req.body.phone

        });
        newContact.save(function (err, contact) {
            if (err) {
                res.json({ msg: 'Failed to add contact' });

            }
            else {
                res.json({ msg: 'Contact added successfully' });

            }
        });
    });
          //update functions
    expobj.get('/api/contacts/:id',function(req,response){
        Contact.find({_id:req.params.id},function(err,datatoupd){

            if(err)
                response.send(err);
            
                response.json(datatoupd);
        });
    });

    //logic to put individual data to update
    expobj.put('/api/contacts/:id',function(req,response){

        //logic to update contact
        console.log("Updated data"+req.body._id+req.body.first_name);
        Contact.update({_id: req.body._id},{$set:{first_name:req.body.first_name,last_name:req.body.last_name,phone:req.body.phone}},{
            multi:true},function(err,update){
                if(err){
                    response.json(err);
                }
                else{response.json(update);}
                
            
        });
    });

    expobj.get('/api/contacts', function (req, res) {
        Contact.find(function (err, contacts) {
            if (err)
                res.send(err);

            res.json(contacts);
        });

    });
    expobj.get('*', function (req, res) {
        res.sendfile('./public/index.html');

    });
};













