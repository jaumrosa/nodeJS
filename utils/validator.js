const { body, validationResult } = require('express-validator');

module.exports = {

    user: async (app, req, res) => {

        //Realizando validações em versão atualizada do express-validator, diferente do visto curso
        await body('name', 'O nome é obrigatório!').notEmpty().run(req);
        await body('email', 'O email está inválido!').notEmpty().isEmail().run(req)

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            app.utils.error.send(errors, req, res);
            return false;

        } 
        
        return true;
        



    }
}