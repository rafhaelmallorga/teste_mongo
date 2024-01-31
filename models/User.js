import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    cpf: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);

export const User = mongoose.model('User', userSchema);
