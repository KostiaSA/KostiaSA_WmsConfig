import {getIsExistsBuhtaView, executeWmsSql, getIsExistsWmsView} from "../../core/MsSqlDb";
import {consoleError, consoleOk} from "../../core/console";
import {BuhtaDatabase} from "../SqlConnections";

export function init_table_Паллета(): Promise<void> {
    let create = "CREATE";

    return getIsExistsWmsView("Паллета")
        .then((isExists: boolean)=> {
            if (isExists === true)
                create = "ALTER";

            let sql = `
                ${create} VIEW Паллета AS
                SELECT
                  'PAL' ТипСубконто,
                  Ключ,
                  Глубина,
                  Ширина,
                  Высота,                 
                  
                  0 as fake 
                FROM [${BuhtaDatabase}].dbo.скл_Паллета
            `;

            return executeWmsSql(sql);

        })
        .then(()=> {
            consoleOk("init_table_Паллета");
        })
        .catch((err: any)=> {
            consoleError(err);
        });

}
