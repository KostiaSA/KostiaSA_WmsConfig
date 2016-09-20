import {
    executeBuhtaSql, executeWmsSql, getValueFromBuhtaSql, getIsExistsWmsView,
    getIsExistsBuhtaView, getIsExistsBuhtaTable
} from "../core/MsSqlDb";
import {consoleOk, consoleError, consoleLog} from "../core/console";
import {create_func_ДатаБезВремени} from "../config/utils/create_func_ДатаБезВремени";


create_func_ДатаБезВремени()
    // .then(()=>{
    //     return init_table_Операция();
    // })
    .then(()=>{
        console.log("\n");
        consoleOk("init-utils","Ok")
        process.exit();
    })
    .catch((err: any)=> {
        consoleError("init-utils-error", err);
        process.exit();
    })

