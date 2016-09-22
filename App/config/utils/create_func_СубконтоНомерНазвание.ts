import {getIsExistsWmsFunc, executeWmsSql} from "../../core/MsSqlDb";
import {consoleOk, consoleError} from "../../core/console";
import {SubcontoList, ISubconto} from "../../core/registerSubconto";

export function create_func_СубконтоНомерНазвание(fieldName: string): Promise<void> {
    let create = "CREATE";

    return getIsExistsWmsFunc("Субконто" + fieldName)
        .then((isExists: boolean)=> {
            if (isExists === true)
                create = "ALTER";

            let subcontoSql: string[] = [];
            subcontoSql = SubcontoList.map((sub: ISubconto)=> {
                return `    IF @SubcontoType = '${sub.subconto}' SET @RETURN = (SELECT [${fieldName}] FROM [${sub.tableName}] WHERE Ключ=@SubcontoID) ELSE`;
            });


            let sql = `
${create} FUNCTION Субконто${fieldName}(
  @SubcontoType VARCHAR(3),
  @SubcontoID INT
) 
RETURNS VARCHAR(MAX)
AS
BEGIN
   DECLARE @RETURN VARCHAR(MAX)
   ${subcontoSql.join("\n")}
   SET @RETURN = 'Неизвестный тип субконто "'+@SubcontoType+'"'
   RETURN @RETURN
END
           `;
            return executeWmsSql(sql);
        })
        .then(()=> {
            consoleOk("create_func_Субконто" + fieldName);
        })
        .catch((err: any)=> {
            consoleError(err);
        });

}
