import mongoose from 'mongoose'


const MONGODB_URI = process.env.MONGODB_URI

interface MongoClient {
    conn : typeof mongoose | null
    promise : Promise<typeof mongoose> | null   
}

declare global {
    var mongo : MongoClient | undefined
}

const cached : MongoClient = global.mongo || { conn: null, promise: null }

if(!global.mongo) {
    global.mongo = cached
}

async function connectDB () {

    if(!MONGODB_URI) {
    throw new Error('MONGODB_URI is not defined in environment variables')
}
    if(cached.conn)
    {
        return cached.conn
    }

    if(!cached.promise) {
        const opts = {
            bufferCommands : false,
        }
        cached.promise = mongoose.connect(MONGODB_URI, opts)
        .then((mongoose) => {
            return mongoose
        })
    }

    try {
        cached.conn = await cached.promise
    }catch (e){
        cached.promise = null
        throw e
    }
    return cached.conn
}

export default connectDB