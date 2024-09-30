import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { DomainPrivateDialogueWithUser } from '../../../private-dialogue/DomainPrivateDialogueWithUser';
import { DomainMessage } from '../../../message/DomainMessage';
export type DomainNotificationPrivateMessageRedactedData = {
    dialogue: DomainPrivateDialogueWithUser;
    previousMessage: DomainMessage;
    newMessage: DomainMessage;
};
export declare const isDomainNotificationPrivateMessageRedactedData: TypeGuard<DomainNotificationPrivateMessageRedactedData>;
export declare const assertDomainNotificationPrivateMessageRedactedData: TypeAssert<DomainNotificationPrivateMessageRedactedData>;
