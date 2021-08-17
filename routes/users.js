const NeDb = require('nedb');
const db = new NeDb({
    filename:'users.db',
    autoload:true,
}); 

module.exports = (app) => {

    const route = app.route('/users');
    const routeId = app.route('/users/:id');

    route.get((req, res)=>{

        db.find({}).sort({name:1}).exec((err, users)=>{
            if(err){
                app.config.error.send(err, req, res);
            }else{
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json({ users });
            }
        });
        
    });

    route.post((req, res)=>{
        
        // req.assert('name', 'Nome não informado!').notEmpty();
        // req.assert('email', 'E-mail não informado!').notEmpty().isEmail();
        // req.assert('senha', 'Senha não informado!').notEmpty();

        // let erros = req.validationErrors();
        // if(erros){
        //     app.config.error.send(erros, req, res);
        //     return false;
        // }

        db.insert(req.body, (err, user)=>{
            if(err){
                app.config.error.send(err, req, res);
            } else{
                res.status(200).json({user});
            }
        });
    });

    routeId.get((req, res)=>{
        db.findOne({_id:req.params.id}).exec((err, user)=>{
            if(err){
                app.config.error.send(err, req, res);
            } else{
                res.status(200).json({user});
            }
        });
    });
    routeId.put((req, res)=>{
        db.update({_id:req.params.id}, req.body, err =>{
            if(err){
                app.config.error.send(err, req, res);
            } else{
                res.status(200).json(Object.assign(req.params, req.body));
            }
        });
    });
    routeId.delete((req, res)=>{
        db.remove({_id:req.params.id}, {}, err =>{
            if(err){
                app.config.error.send(err, req, res);
            } else{
                res.status(200).json(Object.assign(req.params));
            }
        });
    });
};