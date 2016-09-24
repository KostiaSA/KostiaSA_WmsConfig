import {getIsExistsBuhtaView, executeWmsSql, getIsExistsWmsView, getIsExistsWmsTable} from "../../core/MsSqlDb";
import {consoleError, consoleOk, consoleLog} from "../../core/console";
import {BuhtaDatabase, WmsDatabase} from "../SqlConnections";
import {registerSubconto} from "../../core/registerSubconto";

const palleteBarcodePrefix="PAL";
const palleteBarcodeLen=8;
const cellBarcodePrefix="CEL";
const cellBarcodeLen=8;


export function create_table_ШтрихКод(): Promise<void> {

    return getIsExistsWmsTable("ШтрихКод")
        .then((isExists: boolean)=> {
            if (isExists !== true) {
                let sql = `
CREATE TABLE ШтрихКод (
   Номер VARCHAR(50) NOT NULL DEFAULT(''),
   ОбъектТип VARCHAR(3) DEFAULT('Нет'),
   Объект INT NOT NULL DEFAULT(0),
   Количество MONEY NOT NULL DEFAULT(1),
   Основной BIT NOT NULL DEFAULT (0),
   Ремон AS (reverse([Номер]))
)

CREATE CLUSTERED INDEX PK_ШтрихКод_PRIMARY_KEY ON ШтрихКод(
    Номер, 
	ОбъектТип,
	Объект
)

CREATE INDEX IX_ШтрихКод_Ремон_ОбъектТип_Объект ON ШтрихКод(
    Ремон,
	ОбъектТип,
	Объект
)
INCLUDE (
    Номер,
	Количество,
	Основной
)

CREATE INDEX IX_ШтрихКод_ОбъектТип_Объект ON ШтрихКод(
	ОбъектТип,
	Объект
)
            `;
                return executeWmsSql(sql);
            }
            else {
                consoleLog("create_table_ШтрихКод: таблица " + WmsDatabase + "..ШтрихКод уже существует");

                return;
            }
        })
        .then(()=> {
            consoleOk("create_table_ШтрихКод");
        })
        .catch((err: any)=> {
            consoleError(err);
        });

}

export function fill_table_ШтрихКод(): Promise<void> {

    let sql = `
BEGIN TRAN
  TRUNCATE TABLE ШтрихКод
  
  INSERT ШтрихКод(Номер,ОбъектТип,Объект,Количество,Основной)
  SELECT Номер,'ТМЦ',ТМЦ,Количество,Основной FROM ${BuhtaDatabase}..[Штрих-код] WHERE LTRIM(RTRIM(Номер))>''

--  INSERT ШтрихКод(Номер,ОбъектТип,Объект,Количество,Основной)
--  SELECT '${palleteBarcodePrefix}'+REPLICATE('0',${palleteBarcodeLen}-LEN(Ключ))+LTRIM(STR(Ключ)),'PAL',Ключ,1,1 FROM ${BuhtaDatabase}..[скл_Паллета view]

  INSERT ШтрихКод(Номер,ОбъектТип,Объект,Количество,Основной)
  SELECT [Штрих-код],'PAL',Ключ,1,1 FROM ${BuhtaDatabase}..[скл_Паллета view]

  INSERT ШтрихКод(Номер,ОбъектТип,Объект,Количество,Основной)
  SELECT [Штрих-код],'CEL',Ключ,1,1 FROM ${BuhtaDatabase}..[скл_Ячейка view]

COMMIT    
    `

    return executeWmsSql(sql)
        .then(()=> {
            consoleOk("fill_table_ШтрихКод");
        })
        .catch((err: any)=> {
            consoleError(err);
        });

}