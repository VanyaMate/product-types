import { TypeGuard } from '../../_helpers/types/guard.types';
import { TypeAssert } from '../../_helpers/types/assert.types';
import { DomainSimpleError } from '../../error/DomainSimpleError';
export type DomainNotificationErrorData = {
    error: DomainSimpleError;
};
export declare const isDomainNotificationErrorData: TypeGuard<DomainNotificationErrorData>;
export declare const assertDomainNotificationErrorData: TypeAssert<DomainNotificationErrorData>;
