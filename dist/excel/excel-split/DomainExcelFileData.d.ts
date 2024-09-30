import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
import { DomainExcelFileSheetData } from './DomainExcelFileSheetData';
import { DomainExcelFileSplitResponse } from './DomainExcelFileSplitResponse';
export type DomainExcelFileSheets = Record<string, DomainExcelFileSheetData>;
export type DomainExcelFileData = {
    sheets: DomainExcelFileSheets;
    responses: Array<DomainExcelFileSplitResponse>;
};
export declare const isDomainExcelFileData: TypeGuard<DomainExcelFileData>;
export declare const assertDomainExcelFileData: TypeAssert<DomainExcelFileData>;
