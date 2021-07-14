import { connect } from "mongoose";

const connectDB = async () => {
  try {
    // process.env allows to access anywhere
    const conn = await connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log(
      `mongoDB connected: ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (err) {
    console.log(`Error: ${err.message}`.red);
    process.exit(1);
  }
};

export default connectDB;
