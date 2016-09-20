import {
    executeBuhtaSql, executeWmsSql, getValueFromBuhtaSql, getIsExistsWmsView,
    getIsExistsBuhtaView, getIsExistsBuhtaTable
} from "../core/MsSqlDb";
import {consoleOk, consoleError, consoleLog} from "../core/console";
import {init_table_Задание} from "../config/tables/Задание";
import {init_table_Операция} from "../config/tables/Операция";
import {init_table_Товар} from "../config/tables/Товар";
import {init_table_Паллета} from "../config/tables/Паллета";
import {init_table_Ячейка} from "../config/tables/Ячейка";
import {init_table_ЗаявкаНаПриход} from "../config/tables/ЗаявкаНаПриход";
import {init_table_ЗаявкаНаПриходСпец} from "../config/tables/ЗаявкаНаПриходСпец";



init_table_Задание()
    .then(()=>{
        return init_table_Операция();
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
        console.log("\n");
        consoleOk("init-tables","Ok")
        process.exit();
    })
    .catch((err: any)=> {
        consoleError("init-tables-error", err);
        process.exit();
    })

