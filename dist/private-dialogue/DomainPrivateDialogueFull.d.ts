import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
import { DomainMessage } from '../message/DomainMessage';
import { DomainPrivateDialogue } from './DomainPrivateDialogue';
import { DomainUserWithOnline } from '../user/DomainUserWithOnline';
export type DomainPrivateDialogueFull = DomainPrivateDialogue & {
    createdDate: number;
    meArchived: boolean;
    meDeleted: boolean;
    companionArchived: boolean;
    companionDeleted: boolean;
    user: DomainUserWithOnline;
    messages: DomainMessage[];
};
export declare const isDomainPrivateDialogueFull: TypeGuard<DomainPrivateDialogueFull>;
export declare const assertDomainPrivateDialogueFull: TypeAssert<DomainPrivateDialogueFull>;
