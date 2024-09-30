import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
export type DomainExcelFileColumn = [string, string];
export type DomainExcelFileSheetData = {
    firstRow: Array<DomainExcelFileColumn>;
    rowsAmount: number;
};
export declare const isDomainExcelFileSheetData: TypeGuard<DomainExcelFileSheetData>;
export declare const assertDomainExcelFileSheetData: TypeAssert<DomainExcelFileSheetData>;
