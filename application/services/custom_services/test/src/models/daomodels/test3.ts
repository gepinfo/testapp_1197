
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const test3Schema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },

})

const test3Model = mongoose.model('test3', test3Schema, 'test3');
export default test3Model;
