const mongoose = require("mongoose");
const config = require("config");
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};
//   try {
//     // process.env allows to access anywhere
//     const conn = await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useCreateIndex: true,
//       useUnifiedTopology: true,
//     });
//     console.log(
//       `mongoDB connected: ${conn.connection.host}`.cyan.underline.bold
//     );
//   } catch (err) {
//     console.log(`Error: ${err.message}`.red);
//     process.exit(1);
//   }
// };

module.exports = connectDB;
