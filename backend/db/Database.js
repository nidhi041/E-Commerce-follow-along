const mongoose = require('mongoose');
const connectDatabase = () => {
    mongoose
    .connect(process.env.DB_URL) // No need for useNewUr1Parser or useUnifiedTopo1ogy
    .then((data) => {
        console.log(`MongoDB connected with server: ${data.connection.host }`);
})
.catch((err) => {
    console.error(`Database connection failed: ${err.message}`) ;
process.exit(1); // Exit process to avoid running with an invalid DB connection
});
};
module.exports= connectDatabase;