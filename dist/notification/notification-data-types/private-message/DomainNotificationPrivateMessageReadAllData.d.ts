import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { DomainPrivateDialogueWithUser } from '../../../private-dialogue/DomainPrivateDialogueWithUser';
export type DomainNotificationPrivateMessageReadAllData = {
    dialogue: DomainPrivateDialogueWithUser;
};
export declare const isDomainNotificationPrivateMessageReadAllData: TypeGuard<DomainNotificationPrivateMessageReadAllData>;
export declare const assertDomainNotificationPrivateMessageReadAllData: TypeAssert<DomainNotificationPrivateMessageReadAllData>;
