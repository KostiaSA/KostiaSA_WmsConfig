import {
    executeBuhtaSql, executeWmsSql, getValueFromBuhtaSql, getIsExistsWmsView,
    getIsExistsBuhtaView, getIsExistsBuhtaTable
} from "../core/MsSqlDb";
import {consoleOk, consoleError, consoleLog} from "../core/console";


// Promise.all([getIsExistsBuhtaTable("ТМЦ")])
//
//     .then((result: boolean)=> {
//         consoleLog("exists", result);
//     })
//     .catch((err: any)=> {
//         consoleError("buhta connect", err);
//     })

