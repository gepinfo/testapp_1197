import { Request, Response } from 'express';
import { test2Service } from '../service/test2Service';
import { CustomLogger } from '../config/Logger'
let test2 = new test2Service();

export class test2Controller {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    test2.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into test2Controller.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from test2Controller.ts: GpCreate');
    })}
public GpGetNounCreatedBy(req: Request, res: Response) {
    new CustomLogger().guidLog(req);
    
    test2.GpGetNounCreatedBy(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into test2Controller.ts: GpGetNounCreatedBy');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from test2Controller.ts: GpGetNounCreatedBy');
    })}


}