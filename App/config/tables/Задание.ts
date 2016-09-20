import {getIsExistsBuhtaView, executeWmsSql, getIsExistsWmsView} from "../../core/MsSqlDb";
import {consoleError, consoleOk} from "../../core/console";
import {BuhtaDatabase} from "../SqlConnections";

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
                  Номер,
                  Дата,
                  [Когда создал] Время,
                  
                  
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
