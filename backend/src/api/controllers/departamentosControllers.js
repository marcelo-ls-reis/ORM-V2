const Departamentos = require('../models/departamentosModels.js');

module.exports = {
    
    async index(requisicao, resposta){
        const departamentos = await Departamentos.findAll();
        return resposta.json(departamentos);
    },

    async store(req, res) {
       const categoria = await Categorias.create(req.body);
       return res.json({message: "Registro criado com sucesso!"})
    },

    async update(req, res) {
        const { codigo_id } = req.params
        const { cat_descricao } = req.body

        await Categorias.update({
            cat_descricao

        }, {
            where: { id: codigo_id}
        })

        return res.json({message: "Registro atualizado com sucesso!"})
     }
 
}


