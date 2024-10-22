import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
import { DomainUser } from '../user/DomainUser';
import { DomainComment } from '../comment/DomainComment';
export type DomainPost = {
    id: string;
    message: string;
    redacted: boolean;
    creationData: number;
    author: DomainUser;
    liked: boolean;
    likes: number;
    replies: number;
    forwards: number;
    comments: Array<DomainComment>;
};
export declare const isDomainPost: TypeGuard<DomainPost>;
export declare const assertDomainPost: TypeAssert<DomainPost>;
