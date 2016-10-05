import {test_clear_all} from "./clear_all";
import {loadWmsConfigApp} from "../loadWmsConfigApp";
import {consoleOk, consoleError} from "../core/console";
import {создание_задания_на_приемку_169494} from "./приемка/создание_задания_на_приемку_169494";

loadWmsConfigApp();

test_clear_all()
     .then(()=>{
         return создание_задания_на_приемку_169494();
     })
    .then(()=>{
        console.log("\n");
        consoleOk("test_clear_all","Ok")
        process.exit();
    })
    .catch((err: any)=> {
        consoleError("test_clear_all error", err);
        process.exit();
    })

