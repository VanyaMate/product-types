import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
import { DomainUser } from '../user/DomainUser';
import { DomainMessage } from '../message/DomainMessage';
export type DomainDialogue = {
    id: string;
    title: string;
    avatar: string;
    users: DomainUser[];
    messages: DomainMessage[];
};
export declare const isDomainDialogue: TypeGuard<DomainDialogue>;
export declare const assertDomainDialogue: TypeAssert<DomainDialogue>;
