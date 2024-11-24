import { Schema, model, Document } from 'mongoose';
import { IUser } from './User'; // Assuming you have a User model
import { ICourse } from './Course'; // Assuming you have a Course model

// Defining the Enrollment schema
const enrollmentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User', // Referencing the User model
    required: true
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: 'Course', // Referencing the Course model
    required: true
  },
  enrollmentDate: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['enrolled', 'completed', 'dropped'], // Enrollment status
    default: 'enrolled'
  }
});

// Define the interface for Enrollment document
export interface IEnrollment extends Document {
  user: IUser['_id']; // Reference to User model
  course: ICourse['_id']; // Reference to Course model
  enrollmentDate: Date;
  status: 'enrolled' | 'completed' | 'dropped';
}

// Create the Enrollment model
const Enrollment = model<IEnrollment>('Enrollment', enrollmentSchema);

export default Enrollment;