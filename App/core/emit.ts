export function emitFieldList(fields: ((string|number)[])[], fieldType: "source" | "target"): string {
    let fieldIndex = 0;
    if (fieldType === "source")
        fieldIndex = 1;
    return fields.map((item: (string|number)[], index: number)=> {
        if (index !== fields.length - 1)
            return item[fieldIndex].toString() + ",";
        else
            return item[fieldIndex].toString();
    }).join("");
}
