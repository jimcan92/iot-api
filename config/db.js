const mongoose = require('mongoose')

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(
            process.env.MONGODB_URI
        )

        console.log(`MongoDb Connected ${conn.connection.host}`);
    } catch (e) {
        console.error(e);
        process.exit(1)
    }
}

module.exports = connectDb