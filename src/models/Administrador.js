import mongoose from "mongoose";

const admnistradorSchema = new mongoose.Schema(
    {
        id: {type:String},
        cpf: {type:String, required:true},
        nome: {type:String, required:true},
        email: {type:String, required:true},
        senha: {type:String, required:true},
    }
);

const admnistradores = mongoose.model('admnistradores', admnistradorSchema)

export default admnistradores;