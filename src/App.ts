import * as express from "express";
import * as mongoose from "mongoose";
mongoose.set('debug', true);
import { User } from './schemas/user';

class App {
  public app: express.Application;

  /**
   * @ class App
   * @ method bootstrap
   * @ static
   * 
   */
  public static bootstrap (): App {
    return new App();
  }
  constructor () {
    this.app = express();
    const uri = 'mongodb://49.236.147.21:57017/startdash';
    mongoose.connect(uri, 
      {user: 'dev', pass: 'RmxRKwl!!', useMongoClient: true},
      (err) => console.log(err));
    this.app.get("/", (req: express.Request, res: express.Response, next: express.NextFunction) => {
      console.info('Mongo db connected successfully');
      User.create({  
          email: "www.naver.com",
          firstName: "kwon",
          lastName: "kidae"
      }, (err: any) => { console.log("created")});

      res.send("Hello world");

    });
  }
}
export default App;