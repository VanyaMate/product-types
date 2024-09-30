import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
export type DomainExcelFileColumns = Array<string>;
export type DomainExcelFileSheetData = {
    firstRow: DomainExcelFileColumns;
    rowsAmount: number;
};
export declare const isDomainExcelFileSheetData: TypeGuard<DomainExcelFileSheetData>;
export declare const assertDomainExcelFileSheetData: TypeAssert<DomainExcelFileSheetData>;
