// src/models/Course.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface ICourse extends Document {
  title: string;
  description: string;
  instructor: string;
  price: number;
  category: string;
}

const courseSchema: Schema<ICourse> = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  instructor: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
});

export const Course = mongoose.model<ICourse>('Course', courseSchema);