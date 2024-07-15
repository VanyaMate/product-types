import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
import { DomainUser } from '../user/DomainUser';
export type DomainPost = {
    id: string;
    message: string;
    redacted: boolean;
    creationData: string;
    author: DomainUser;
};
export declare const isDomainPost: TypeGuard<DomainPost>;
export declare const assertDomainPost: TypeAssert<DomainPost>;
