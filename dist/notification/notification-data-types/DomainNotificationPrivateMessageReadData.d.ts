import { TypeGuard } from '../../_helpers/types/guard.types';
import { TypeAssert } from '../../_helpers/types/assert.types';
import { DomainPrivateDialogueWithUser } from '../../private-dialogue/DomainPrivateDialogueWithUser';
import { DomainMessage } from '../../message/DomainMessage';
export type DomainNotificationPrivateMessageReadData = {
    dialogue: DomainPrivateDialogueWithUser;
    message: DomainMessage;
};
export declare const isDomainNotificationPrivateMessageReadData: TypeGuard<DomainNotificationPrivateMessageReadData>;
export declare const assertDomainNotificationPrivateMessageReadData: TypeAssert<DomainNotificationPrivateMessageReadData>;
