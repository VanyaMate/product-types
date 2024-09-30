import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { DomainPrivateDialogueWithUser } from '../../../private-dialogue/DomainPrivateDialogueWithUser';
export type DomainNotificationPrivateDialogueArchiveData = {
    dialogue: DomainPrivateDialogueWithUser;
};
export declare const isDomainNotificationPrivateDialogueArchiveData: TypeGuard<DomainNotificationPrivateDialogueArchiveData>;
export declare const assertDomainNotificationPrivateDialogueArchiveData: TypeAssert<DomainNotificationPrivateDialogueArchiveData>;
