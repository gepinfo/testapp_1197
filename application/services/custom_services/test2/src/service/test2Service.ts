import { Request, Response } from 'express';
import {test2Dao} from '../dao/test2Dao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let test2 = new test2Dao();

export class test2Service {
    
    constructor() { }
    
    public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into test2Service.ts: GpCreate')
     let  test2Data = req.body;
     test2.GpCreate(test2Data,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from test2Service.ts: GpCreate')
         callback(response);
         });
    }
    
public  GpGetNounCreatedBy(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into test2Service.ts: GpGetNounCreatedBy')
     let  test2Data = { created_by: req.query.createdby };
     test2.GpGetNounCreatedBy(test2Data,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from test2Service.ts: GpGetNounCreatedBy')
         callback(response);
         });
    }
    
    
    
    
}