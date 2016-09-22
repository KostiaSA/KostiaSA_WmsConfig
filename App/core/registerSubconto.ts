export let SubcontoList: ISubconto[] = [];

export interface ISubconto {
    subconto: string;
    tableName: string;
}

export function registerSubconto(subconto: ISubconto) {
    if (SubcontoList.filter((item)=>item.subconto === subconto.subconto).length > 0)
        throw "registerSubconto(): уже субконто с типом '" + subconto.subconto + "'";
    SubcontoList.push(subconto);
}
