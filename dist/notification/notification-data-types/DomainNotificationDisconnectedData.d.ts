import { TypeGuard } from '../../_helpers/types/guard.types';
import { TypeAssert } from '../../_helpers/types/assert.types';
export type DomainNotificationDisconnectedData = {
    timeMs: number;
    reason: string;
};
export declare const isDomainNotificationDisconnectedData: TypeGuard<DomainNotificationDisconnectedData>;
export declare const assertDomainNotificationDisconnectedData: TypeAssert<DomainNotificationDisconnectedData>;
