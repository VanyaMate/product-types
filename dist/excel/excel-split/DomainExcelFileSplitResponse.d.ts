import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
import { DomainExcelFileSplitData } from './DomainExcelFileSplitData';
export type DomainExcelFileSplitResponse = {
    fileName: string;
    fileSize: number;
    options: DomainExcelFileSplitData;
    path: string;
};
export declare const isDomainExcelFileSplitResponse: TypeGuard<DomainExcelFileSplitResponse>;
export declare const assertDomainExcelFileSplitResponse: TypeAssert<DomainExcelFileSplitResponse>;
