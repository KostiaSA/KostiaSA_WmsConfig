import {
    executeBuhtaSql, executeWmsSql, getValueFromBuhtaSql, getIsExistsWmsView,
    getIsExistsBuhtaView, getIsExistsBuhtaTable
} from "../core/MsSqlDb";
import {consoleOk, consoleError, consoleLog} from "../core/console";
import {create_func_ДатаБезВремени} from "../config/utils/create_func_ДатаБезВремени";
import {create_func_СубконтоНомерНазвание} from "../config/utils/create_func_СубконтоНомерНазвание";
import {create_proc_ПолучитьСубконтоПоШтрихКоду} from "../config/utils/create_proc_ПолучитьСубконтоПоШтрихКоду";
import {loadWmsConfigApp} from "../loadWmsConfigApp";


loadWmsConfigApp();

create_func_ДатаБезВремени()
    .then(()=>{
        return create_func_СубконтоНомерНазвание("Номер");
    })
    .then(()=>{
        return create_func_СубконтоНомерНазвание("Название");
    })
    .then(()=>{
        return create_func_СубконтоНомерНазвание("НомерНазвание");
    })
     .then(()=>{
         return create_proc_ПолучитьСубконтоПоШтрихКоду();
     })
    .then(()=>{
        console.log("\n");
        consoleOk("init-utils","Ok")
        process.exit();
    })
    .catch((err: any)=> {
        consoleError("init-utils-error", err);
        process.exit();
    })

