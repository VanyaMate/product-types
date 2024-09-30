import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
import { DomainUser } from '../user/DomainUser';
export type DomainFile = {
    id: string;
    fileName: string;
    filePath: string;
    fileType: string;
    fileOriginalName: string;
    fileWeight: number;
    uploadDate: string;
    private: boolean;
    owner: DomainUser;
};
export declare const isDomainFile: TypeGuard<DomainFile>;
export declare const assertDomainFile: TypeAssert<DomainFile>;
