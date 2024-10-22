import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
import { DomainUserWithOnline } from '../user/DomainUserWithOnline';
export type DomainPrivateDialogueWithUser = {
    id: string;
    title: string;
    avatar: string;
    user: DomainUserWithOnline;
};
export declare const isDomainPrivateDialogueWithUser: TypeGuard<DomainPrivateDialogueWithUser>;
export declare const assertDomainPrivateDialogueWithUser: TypeAssert<DomainPrivateDialogueWithUser>;
