import mongoose from 'mongoose';

export async function main() {
  try {
    await mongoose.connect(
      `mongodb://127.0.0.1:27017/mydb?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.3`
    );
    console.log(`Connected to MongoDB`);
  } catch (error) {
    console.log(error);
  }
}
