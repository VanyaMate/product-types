import { TypeGuard } from '../../_helpers/types/guard.types';
import { TypeAssert } from '../../_helpers/types/assert.types';
import { DomainUser } from '../../user/DomainUser';
export type DomainNotificationMessageReadData = {
    where: DomainUser;
    messageIndex: number;
};
export declare const isDomainNotificationMessageReadData: TypeGuard<DomainNotificationMessageReadData>;
export declare const assertDomainNotificationMessageReadData: TypeAssert<DomainNotificationMessageReadData>;
