export type TypeAssert<T> = (data: unknown, variableName: string, typeName: string) => asserts data is T;
