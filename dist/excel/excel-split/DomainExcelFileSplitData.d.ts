import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
export type DomainExcelFileSplitData = {
    selectedSheet: string;
    selectedColumns: Array<string>;
    rowsPerFile: number;
};
export declare const isDomainExcelFileSplitData: TypeGuard<DomainExcelFileSplitData>;
export declare const assertDomainExcelFileSplitData: TypeAssert<DomainExcelFileSplitData>;
