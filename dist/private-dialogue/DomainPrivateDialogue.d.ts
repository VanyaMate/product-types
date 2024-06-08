import { DomainUser } from '../user/DomainUser';
import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
export type DomainPrivateDialogue = {
    id: string;
    title: string;
    avatar: string;
    createdDate: string;
    user: DomainUser;
    messages: unknown[];
};
export declare const isDomainPrivateDialogue: TypeGuard<DomainPrivateDialogue>;
export declare const assertDomainPrivateDialogue: TypeAssert<DomainPrivateDialogue>;
