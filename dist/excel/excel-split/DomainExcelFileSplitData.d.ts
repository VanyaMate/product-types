import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
export type DomainExcelFileSplitColumnSelect = [string, boolean];
export type DomainExcelFileSplitData = {
    selectedColumns: Array<DomainExcelFileSplitColumnSelect>;
    convertToTextFile: boolean;
    rowsPerFile: number;
    saveFirstRow: boolean;
};
export declare const isDomainExcelFileSplitData: TypeGuard<DomainExcelFileSplitData>;
export declare const assertDomainExcelFileSplitData: TypeAssert<DomainExcelFileSplitData>;
