import { TypeGuard } from '../../_helpers/types/guard.types';
import { TypeAssert } from '../../_helpers/types/assert.types';
import { DomainUser } from '../../user/DomainUser';
import { DomainPrivateDialogue } from '../../private-dialogue/DomainPrivateDialogue';
export type DomainNotificationUserMessageDeletedData = {
    user: DomainUser;
    dialogue: DomainPrivateDialogue;
    message: string;
    messageIndex: string;
};
export declare const isDomainNotificationUserMessageDeletedData: TypeGuard<DomainNotificationUserMessageDeletedData>;
export declare const assertDomainNotificationUserMessageDeletedData: TypeAssert<DomainNotificationUserMessageDeletedData>;
