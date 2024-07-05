import mongoose from 'mongoose'

async function conectaDB() {
    mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.mos7psu.mongodb.net/Livraria?retryWrites=true&w=majority&appName=Cluster0`)
    return mongoose.connection;
}

export default conectaDB