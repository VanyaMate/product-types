import { TypeAssert, TypeGuard } from '../_helpers/types';
import { DomainFingerprint } from '../fingerprint/DomainFingerprint';
export type DomainTokenGenerateData = {
    login: string;
    fingerprint: DomainFingerprint;
};
export declare const isDomainTokenGenerateData: TypeGuard<DomainTokenGenerateData>;
export declare const assertDomainTokenGenerateData: TypeAssert<DomainTokenGenerateData>;
