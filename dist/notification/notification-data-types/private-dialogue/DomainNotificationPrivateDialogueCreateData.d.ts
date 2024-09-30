import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { DomainPrivateDialogueFull } from '../../../private-dialogue/DomainPrivateDialogueFull';
export type DomainNotificationPrivateDialogueCreateData = {
    dialogue: DomainPrivateDialogueFull;
};
export declare const isDomainNotificationPrivateDialogueCreateData: TypeGuard<DomainNotificationPrivateDialogueCreateData>;
export declare const assertDomainNotificationPrivateDialogueCreateData: TypeAssert<DomainNotificationPrivateDialogueCreateData>;
