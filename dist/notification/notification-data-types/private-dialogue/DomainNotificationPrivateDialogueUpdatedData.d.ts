import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { DomainPrivateDialogueWithUser } from '../../../private-dialogue/DomainPrivateDialogueWithUser';
export type DomainNotificationPrivateDialogueUpdatedData = {
    dialogue: DomainPrivateDialogueWithUser;
    previous: DomainPrivateDialogueWithUser;
};
export declare const isDomainNotificationPrivateDialogueUpdatedData: TypeGuard<DomainNotificationPrivateDialogueUpdatedData>;
export declare const assertDomainNotificationPrivateDialogueUpdatedData: TypeAssert<DomainNotificationPrivateDialogueUpdatedData>;
