import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { DomainUser } from '../../../user/DomainUser';
import { DomainPrivateDialogue } from '../../../private-dialogue/DomainPrivateDialogue';
export type DomainNotificationUserMessageRedactedData = {
    user: DomainUser;
    dialogue: DomainPrivateDialogue;
    previousMessage: string;
    newMessage: string;
    messageIndex: string;
};
export declare const isDomainNotificationUserMessageRedactedData: TypeGuard<DomainNotificationUserMessageRedactedData>;
export declare const assertDomainNotificationUserMessageRedactedData: TypeAssert<DomainNotificationUserMessageRedactedData>;
