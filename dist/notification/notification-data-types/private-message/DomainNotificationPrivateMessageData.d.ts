import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { DomainMessage } from '../../../message/DomainMessage';
import { DomainPrivateDialogueWithUser } from '../../../private-dialogue/DomainPrivateDialogueWithUser';
export type DomainNotificationPrivateMessageData = {
    dialogue: DomainPrivateDialogueWithUser;
    message: DomainMessage;
};
export declare const isDomainNotificationPrivateMessageData: TypeGuard<DomainNotificationPrivateMessageData>;
export declare const assertDomainNotificationPrivateMessageData: TypeAssert<DomainNotificationPrivateMessageData>;
