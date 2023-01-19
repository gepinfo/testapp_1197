
export interface test 
{
   created_date: { type: Date },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date },
   name: String,
   test2: { type: String, ref: 'test2' },
   test3: [{ type: ObjectId, ref: 'test3' }]
}
