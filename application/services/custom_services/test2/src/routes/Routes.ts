import { Request, Response, NextFunction } from "express";
import { test2Controller } from '../controller/test2Controller';


export class Routes {
    private test2: test2Controller = new test2Controller();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/test2').post(this.test2.GpCreate);
app.route('/test2/userid/created_by').get(this.test2.GpGetNounCreatedBy);
     }

}