import { TypeGuard } from '../../_helpers/types/guard.types';
import { TypeAssert } from '../../_helpers/types/assert.types';
import { DomainUser } from '../../user/DomainUser';
export type DomainNotificationUserMessageReadData = {
    user: DomainUser;
    messageIndex: number;
};
export declare const isDomainNotificationUserMessageReadData: TypeGuard<DomainNotificationUserMessageReadData>;
export declare const assertDomainNotificationUserMessageReadData: TypeAssert<DomainNotificationUserMessageReadData>;
