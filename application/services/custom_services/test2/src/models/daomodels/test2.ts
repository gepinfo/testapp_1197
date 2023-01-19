
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const test2Schema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: String,
   features: String
})

const test2Model = mongoose.model('test2', test2Schema, 'test2');
export default test2Model;
