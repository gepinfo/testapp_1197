
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const testSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: String,
   test2: { type: Schema.Types.String, ref: 'test2' },
   test3: [{ type: Schema.Types.ObjectId, ref: 'test3' }]
})

const testModel = mongoose.model('test', testSchema, 'test');
export default testModel;
