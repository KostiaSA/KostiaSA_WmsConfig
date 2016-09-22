import {
    executeBuhtaSql, executeWmsSql, getValueFromBuhtaSql, getIsExistsWmsView,
    getIsExistsBuhtaView, getIsExistsBuhtaTable
} from "../core/MsSqlDb";
import {consoleOk, consoleError, consoleLog} from "../core/console";
import {init_table_Задание} from "../config/tables/Задание";
import {init_table_ЗаданиеСпец} from "../config/tables/ЗаданиеСпец";
import {init_table_Товар} from "../config/tables/Товар";
import {init_table_Паллета} from "../config/tables/Паллета";
import {init_table_Ячейка} from "../config/tables/Ячейка";
import {init_table_ЗаявкаНаПриход} from "../config/tables/ЗаявкаНаПриход";
import {init_table_ЗаявкаНаПриходСпец} from "../config/tables/ЗаявкаНаПриходСпец";
import {create_table_Остаток, init_table_Остаток, create_trigger_Докспец_wms_Остаток} from "../config/tables/Остаток";
import {create_func_СубконтоНомерНазвание} from "../config/utils/create_func_СубконтоНомерНазвание";



init_table_Задание()
    .then(()=>{
        return init_table_ЗаданиеСпец();
    })
    .then(()=>{
        return init_table_Товар();
    })
    .then(()=>{
        return init_table_Паллета();
    })
    .then(()=>{
        return init_table_Ячейка();
    })
    .then(()=>{
        return init_table_ЗаявкаНаПриход();
    })
    .then(()=>{
        return init_table_ЗаявкаНаПриходСпец();
    })
    .then(()=>{
        return create_table_Остаток();
    })
    .then(()=>{
        return init_table_Остаток();
    })
    .then(()=>{
        return create_trigger_Докспец_wms_Остаток();
    })
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
        console.log("\n");
        consoleOk("init-tables","Ok")
        process.exit();
    })
    .catch((err: any)=> {
        consoleError("init-tables-error", err);
        process.exit();
    })

