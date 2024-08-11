import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
export type DomainPostUpdateData = {
    message: string;
};
export declare const isDomainPostUpdateData: TypeGuard<DomainPostUpdateData>;
export declare const assertDomainPostUpdateData: TypeAssert<DomainPostUpdateData>;
