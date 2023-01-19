import { Request, Response } from 'express';
import { testService } from '../service/testService';
import { CustomLogger } from '../config/Logger'
let test = new testService();

export class testController {
    
    constructor() { }
    
    public GpGetAllValues(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    test.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testController.ts: GpGetAllValues');
    })}
public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    test.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testController.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    test.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into testController.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from testController.ts: GpGetNounCreatedBy');
    })}


}