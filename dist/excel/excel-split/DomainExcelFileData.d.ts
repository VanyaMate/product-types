import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
export type DomainExcelFileColumn = [string, string];
export type DomainExcelFileData = {
    firstRow: Array<DomainExcelFileColumn>;
    rowsAmount: number;
};
export declare const isDomainExcelFileData: TypeGuard<DomainExcelFileData>;
export declare const assertDomainExcelFileData: TypeAssert<DomainExcelFileData>;
