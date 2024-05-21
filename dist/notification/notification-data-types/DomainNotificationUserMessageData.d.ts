import { TypeGuard } from '../../_helpers/types/guard.types';
import { TypeAssert } from '../../_helpers/types/assert.types';
import { DomainUser } from '../../user/DomainUser';
export type DomainNotificationUserMessageData = {
    user: DomainUser;
    message: string;
};
export declare const isDomainNotificationUserMessageData: TypeGuard<DomainNotificationUserMessageData>;
export declare const assertDomainNotificationUserMessageData: TypeAssert<DomainNotificationUserMessageData>;
