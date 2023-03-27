import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema(
    {
        id: {type:String},
        cpf: {type:String, required:true},
        nome: {type:String, required:true},
        email: {type:String, required:true},
        senha: {type:String, required:true},
    }
);

const clientes = mongoose.model('clientes', clienteSchema)

export default clientes;