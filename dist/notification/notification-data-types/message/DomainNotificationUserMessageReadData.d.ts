import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { DomainUser } from '../../../user/DomainUser';
import { DomainPrivateDialogue } from '../../../private-dialogue/DomainPrivateDialogue';
export type DomainNotificationUserMessageReadData = {
    user: DomainUser;
    dialogue: DomainPrivateDialogue;
    messageIndex: number;
};
export declare const isDomainNotificationUserMessageReadData: TypeGuard<DomainNotificationUserMessageReadData>;
export declare const assertDomainNotificationUserMessageReadData: TypeAssert<DomainNotificationUserMessageReadData>;
