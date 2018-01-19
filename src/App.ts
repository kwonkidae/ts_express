import * as express from "express";
import * as mongoose from "mongoose";

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
    mongoose.createConnection
    this.app = express();
    const uri = 'mongodb://127.0.0.1:27017/lawtalk';
    const db = mongoose.createConnection(uri, {user: 'lawdev', pass: 'fh&zjavjsl2@1B', useMongoClient: true});
    db.on('error', (err) => {
        if(err) throw err;
    });
  
    db.once('open', () => {
        console.info('Mongo db connected successfully');
    });
    this.app.get("/", (req: express.Request, res: express.Response, next: express.NextFunction) => {
      res.send("Hello world");


    });
  }
}
export default App;