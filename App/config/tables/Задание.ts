import {getIsExistsBuhtaView, executeWmsSql, getIsExistsWmsView} from "../../core/MsSqlDb";
import {consoleError, consoleOk} from "../../core/console";
import {BuhtaDatabase} from "../SqlConnections";
import {registerSubconto} from "../../core/registerSubconto";

registerSubconto({subconto: "Док", tableName: "Задание"});

export function init_table_Задание(): Promise<void> {
    let create = "CREATE";

    return getIsExistsWmsView("Задание")
        .then((isExists: boolean)=> {
            if (isExists === true)
                create = "ALTER";

            let sql = `
                ${create} VIEW Задание AS
                SELECT
                  Ключ,
                  Вид as ДокументВид, 
                  Договор as ДокументДоговор, 
                  Номер,
                  'Задание '+Номер as Название,
                  'Задание '+Номер as НомерНазвание,
                  Дата,
                  [Когда создал] Время,
                  [Юр.лицо] ЮрЛицо,
                  
                  0 as fake 
                FROM [${BuhtaDatabase}].dbo.Документ
            `;

            return executeWmsSql(sql);

        })
        .then(()=> {
            consoleOk("init_table_Задание");
        })
        .catch((err: any)=> {
            consoleError(err);
        });

}
