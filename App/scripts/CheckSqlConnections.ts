import {executeBuhtaSql, executeWmsSql, getValueFromBuhtaSql} from "../core/MsSqlDb";
import {consoleOk, consoleError} from "../core/console";
const chalk = require('chalk');

Promise.all([executeBuhtaSql("select 'Ok' as Ok")])

    .then(()=> {
        consoleOk("buhta connect", "Ok");
//        process.exit();
    })
    .catch((err: any)=> {
        consoleError("buhta connect", err);
//        process.exit();
    })

Promise.all([executeWmsSql("select 'Ok' as Ok")])

    .then(()=> {
        consoleOk("wms connect", "Ok");
//        process.exit();
    })
    .catch((err: any)=> {
        consoleError("wms connect", err);
//        process.exit();
    })

Promise.all([getValueFromBuhtaSql("select 'Ok12' as Ok","Ok")])

    .then((value)=> {
        consoleOk("buhta get value", value);
//        process.exit();
    })
    .catch((err: any)=> {
        consoleError("wms connect", err);
//        process.exit();
    })
