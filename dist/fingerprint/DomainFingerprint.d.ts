import { TypeAssert, TypeGuard } from '../_helpers/types';
export type DomainFingerprint = {
    ip: string;
    browser: string;
    device: string;
};
export declare const isDomainFingerprint: TypeGuard<DomainFingerprint>;
export declare const assertDomainFingerprint: TypeAssert<DomainFingerprint>;
