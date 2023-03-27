import mongoose from "mongoose"

mongoose.connect("mongodb+srv://Avbooks:vvAn5h1@cluster0.d4jcslk.mongodb.net/Avbooks");

let db = mongoose.connection;

export default db;