import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
import { DomainMessage } from '../message/DomainMessage';
import { DomainUserWithOnline } from '../user/DomainUserWithOnline';
export type DomainDialogue = {
    id: string;
    title: string;
    avatar: string;
    users: DomainUserWithOnline[];
    messages: DomainMessage[];
};
export declare const isDomainDialogue: TypeGuard<DomainDialogue>;
export declare const assertDomainDialogue: TypeAssert<DomainDialogue>;
