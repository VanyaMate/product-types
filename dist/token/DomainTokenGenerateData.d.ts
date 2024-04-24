import { DomainFingerprint } from '../fingerprint/DomainFingerprint';
import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
export type DomainTokenGenerateData = {
    user_id: string;
    fingerprint: DomainFingerprint;
};
export declare const isDomainTokenGenerateData: TypeGuard<DomainTokenGenerateData>;
export declare const assertDomainTokenGenerateData: TypeAssert<DomainTokenGenerateData>;
