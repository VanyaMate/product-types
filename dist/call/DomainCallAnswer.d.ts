import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
export type DomainCallAnswer = {
    answer: RTCLocalSessionDescriptionInit;
    candidates: unknown[];
};
export declare const isDomainCallAnswer: TypeGuard<DomainCallAnswer>;
export declare const assertDomainCallAnswer: TypeAssert<DomainCallAnswer>;
