import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
import { DomainUser } from '../user/DomainUser';
import { DomainMessage } from '../message/DomainMessage';
export type DomainDialog = {
    id: string;
    users: DomainUser[];
    messages: DomainMessage[];
};
export declare const isDomainDialog: TypeGuard<DomainDialog>;
export declare const assertDomainDialog: TypeAssert<DomainDialog>;
