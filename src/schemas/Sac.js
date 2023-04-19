import { model, Schema } from 'mongoose'

const Sac = new Schema({
    nome: String,
    email: String,
    mensagem: String,
      telefone: String,
        cpf: String,
        assunto: String,
        numeropedido:String
})

export default new model('Sac', Sac)
