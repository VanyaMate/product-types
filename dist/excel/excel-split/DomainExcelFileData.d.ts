import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
import { DomainExcelFileSheetData } from './DomainExcelFileSheetData';
export type DomainExcelFileSheets = Record<string, DomainExcelFileSheetData>;
export type DomainExcelFileData = {
    sheets: DomainExcelFileSheets;
};
export declare const isDomainExcelFileData: TypeGuard<DomainExcelFileData>;
export declare const assertDomainExcelFileData: TypeAssert<DomainExcelFileData>;
