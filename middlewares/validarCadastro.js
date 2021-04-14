const {Usuario} = require('../models');

module.exports = async (req, res, next) => {
    let { email, senha } = req.body;
    
    let user = await Usuario.findAll({where:{email}});
    

    if (user.length){ 
        res.status(400).json({erro:"Email já cadastrado"});
        
        return

    } else {
        if (senha.length < 6 || senha.length > 12 ){
         
            res.status(400).json({erro:"senha invalida"})
            
        } else {
           
            next(); 
        }
 
    }
}
