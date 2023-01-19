import * as mongoose from 'mongoose';
import testModel from '../models/daomodels/test';
import { CustomLogger } from '../config/Logger'


export class testDao {
    private test = testModel;
    constructor() { }
    
    public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into testDao.ts: GpGetAllValues');

    

    
    
    
    this.test.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from testDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpCreate(testData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into testDao.ts: GpCreate');

    let temp = new testModel(testData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from testDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}
public async GpGetNounCreatedBy(testData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into testDao.ts: GpGetNounCreatedBy');

    

    
    
    
    this.test.aggregate(([
                        { $match: { $and: [{ created_by: testData.created_by }] } }
                    ])).then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from testDao.ts: GpGetNounCreatedBy');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}