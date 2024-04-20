export const throwAssertError = function (variableName: string, typeName: string): void {
    throw Error(`Variable ${ variableName } does not correspond to type ${ typeName }`);
};
