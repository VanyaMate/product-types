import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
export type DomainFingerprint = {
    ip: string;
    browser: string;
    device: string;
};
export declare const isDomainFingerprint: TypeGuard<DomainFingerprint>;
export declare const assertDomainFingerprint: TypeAssert<DomainFingerprint>;
