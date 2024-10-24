import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
import { DomainUser } from '../user/DomainUser';
export type DomainComment = {
    id: string;
    comment: string;
    author: DomainUser;
    creationDate: number;
    redacted: boolean;
    liked: boolean;
    likesAmount: number;
    repliesAmount: number;
    forwardsAmount: number;
    replyId?: string | undefined;
    comments: Array<DomainComment>;
};
export declare const isDomainComment: TypeGuard<DomainComment>;
export declare const assertDomainComment: TypeAssert<DomainComment>;
