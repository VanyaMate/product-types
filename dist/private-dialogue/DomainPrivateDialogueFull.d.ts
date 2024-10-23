import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
import { DomainMessage } from '../message/DomainMessage';
import { DomainPrivateDialogue } from './DomainPrivateDialogue';
import { DomainUser } from '../user/DomainUser';
export type DomainPrivateDialogueFull = DomainPrivateDialogue & {
    createdDate: number;
    meArchived: boolean;
    meDeleted: boolean;
    companionArchived: boolean;
    companionDeleted: boolean;
    user: DomainUser;
    messages: DomainMessage[];
};
export declare const isDomainPrivateDialogueFull: TypeGuard<DomainPrivateDialogueFull>;
export declare const assertDomainPrivateDialogueFull: TypeAssert<DomainPrivateDialogueFull>;
