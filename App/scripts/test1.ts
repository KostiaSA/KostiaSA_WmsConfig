import {
    executeBuhtaSql, executeWmsSql, getValueFromBuhtaSql, getIsExistsWmsView,
    getIsExistsBuhtaView, getIsExistsBuhtaTable
} from "../core/MsSqlDb";
import {consoleOk, consoleError, consoleLog} from "../core/console";
import {create_proc_СоздатьЗаданиеНаПриемку} from "../config/tasks/ЗаданиеНаПриемку/create_proc_ЗаданиеНаПриемку";



create_proc_СоздатьЗаданиеНаПриемку()
     .then(()=> {
         consoleOk("ok");
     })
     .catch((err: any)=> {
         consoleError("error", err);
     })

