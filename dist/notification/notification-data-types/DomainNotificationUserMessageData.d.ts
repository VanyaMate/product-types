import { TypeGuard } from '../../_helpers/types/guard.types';
import { TypeAssert } from '../../_helpers/types/assert.types';
import { DomainMessage } from '../../message/DomainMessage';
import { DomainPrivateDialogue } from '../../private-dialogue/DomainPrivateDialogue';
export type DomainNotificationUserMessageData = {
    dialogue: DomainPrivateDialogue;
    message: DomainMessage;
};
export declare const isDomainNotificationUserMessageData: TypeGuard<DomainNotificationUserMessageData>;
export declare const assertDomainNotificationUserMessageData: TypeAssert<DomainNotificationUserMessageData>;
