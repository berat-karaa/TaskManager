import mongoose from 'mongoose';

export const connectDB =async () => {
    await mongoose.connect('mongodb+srv://Username:password@cluster0.zavabxv.mongodb.net/TaskManager')
    .then (() => console.log('DB CONNECTED'));
    }