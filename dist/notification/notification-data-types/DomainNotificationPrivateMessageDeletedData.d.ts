import { TypeGuard } from '../../_helpers/types/guard.types';
import { TypeAssert } from '../../_helpers/types/assert.types';
import { DomainPrivateDialogueWithUser } from '../../private-dialogue/DomainPrivateDialogueWithUser';
import { DomainMessage } from '../../message/DomainMessage';
export type DomainNotificationPrivateMessageDeletedData = {
    dialogue: DomainPrivateDialogueWithUser;
    message: DomainMessage;
};
export declare const isDomainNotificationPrivateMessageDeletedData: TypeGuard<DomainNotificationPrivateMessageDeletedData>;
export declare const assertDomainNotificationUserMessageDeletedData: TypeAssert<DomainNotificationPrivateMessageDeletedData>;
