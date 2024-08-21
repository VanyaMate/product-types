import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { DomainCall } from '../../../call/DomainCall';
export type DomainNotificationCallFinishData = {
    call: DomainCall;
};
export declare const isDomainNotificationCallFinishData: TypeGuard<DomainNotificationCallFinishData>;
export declare const assertDomainNotificationCallFinishData: TypeAssert<DomainNotificationCallFinishData>;
