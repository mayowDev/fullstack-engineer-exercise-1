import mongoose from "mongoose";

export interface ITest extends mongoose.Document {
  patientName: string;
}

export const TestSchema = new mongoose.Schema({
  patientName: String,
});

const Test = mongoose.model<ITest>("Test", TestSchema);
export default Test;
