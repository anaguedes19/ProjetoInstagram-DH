const { Post, sequelize} = require('../models');

const postsController = {
    index: async (req, res) => {
        let posts = await Post.findAll();

        return res.json(posts);
    },

    create: async (req, res) => {
        let { texto, img, usuarios_id, n_likes} = req.body;
        let postAtualizado = await Post.create({ 
            texto, 
            img, 
            usuarios_id, 
            n_likes
        })
    
        return res.send(postAtualizado)
    },

    update: async (request, response) => {
        const { id } = request.params;
        const { texto, img, usuarios_id } = request.body;
        
        const postAtualizado = Post.update({
            texto, img, usuarios_id
        }, {
            where: {id}
        })

        return response.json(postAtualizado)
    },


    delete: async (request, response) => {
        const { id } = request.params;
        
        const postDeletado = Post.destroy({
            where: {id}
        })

        return response.json(postDeletado);
    },


    show: async (request, response) => {
        let {usuarios_id} = request.params; //filtra pelo id do usuario
        
        let perfilUsuario = await Post.findAll({
            where:{usuarios_id}
        })
        return response.json(perfilUsuario);
    }
}


module.exports = postsController;