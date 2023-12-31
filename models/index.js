const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DATABASE_URI);
        console.log('데이터베이스 연결 성공');
    }
    catch (err) {
        console.error(err);
    }
};


module.exports = connectDB;