import { DomainUser } from '../user/DomainUser';
import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
export type DomainCall = {
    id: string;
    user: DomainUser;
    finished: boolean;
    initiatorLogin: string;
    creationDate: number;
    finishedDate: number;
    connectionId: string;
};
export declare const isDomainCall: TypeGuard<DomainCall>;
export declare const assertDomainCall: TypeAssert<DomainCall>;
