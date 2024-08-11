import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
export type DomainPostCreateData = {
    message: string;
};
export declare const isDomainPostCreateData: TypeGuard<DomainPostCreateData>;
export declare const assertDomainPostCreateData: TypeAssert<DomainPostCreateData>;
