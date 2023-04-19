import Sac from "../schemas/Sac";

class Saccontroller {
    async post(req, res) {
        const { nome, email, mensagem, telefone, cpf, assunto, numeropedido } = req.body;
        const saclist = await Sac.create({
            nome: nome,
            email: email,
            mensagem: mensagem,
            telefone: telefone,
            cpf: cpf,
            assunto: assunto,
            numeropedido: numeropedido
        })
        return res.json(saclist)
    }
    async get(req,res) {
        const saclist = await Sac.find()
        return res.json(saclist)
    }
}

export default new Saccontroller();
