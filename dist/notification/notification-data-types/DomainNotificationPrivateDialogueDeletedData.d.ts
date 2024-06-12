import { TypeGuard } from '../../_helpers/types/guard.types';
import { TypeAssert } from '../../_helpers/types/assert.types';
import { DomainPrivateDialogueWithUser } from '../../private-dialogue/DomainPrivateDialogueWithUser';
export type DomainNotificationPrivateDialogueDeletedData = {
    dialogue: DomainPrivateDialogueWithUser;
};
export declare const isDomainNotificationPrivateDialogueDeletedData: TypeGuard<DomainNotificationPrivateDialogueDeletedData>;
export declare const assertDomainNotificationPrivateDialogueDeletedData: TypeAssert<DomainNotificationPrivateDialogueDeletedData>;
