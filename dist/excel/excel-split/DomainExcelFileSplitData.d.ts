import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
export type DomainExcelFileSplitData = {
    selectedSheet: string;
    selectedColumns: Array<number>;
    convertToTextFile: boolean;
    rowsPerFile: number;
    saveFirstRow: boolean;
};
export declare const isDomainExcelFileSplitData: TypeGuard<DomainExcelFileSplitData>;
export declare const assertDomainExcelFileSplitData: TypeAssert<DomainExcelFileSplitData>;
