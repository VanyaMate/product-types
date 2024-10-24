import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString, isNumber, isBoolean, isArray, isOptional,
} from '@vanyamate/types-kit';
import { DomainUser, isDomainUser } from '../user/DomainUser';


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
}

export const isDomainComment: TypeGuard<DomainComment> = function (data): data is DomainComment {
    return (
        isObject(data) &&
        isString(data['id']) &&
        isString(data['comment']) &&
        isDomainUser(data['author']) &&
        isNumber(data['creationDate']) &&
        isBoolean(data['redacted']) &&
        isBoolean(data['liked']) &&
        isNumber(data['likesAmount']) &&
        isNumber(data['repliesAmount']) &&
        isNumber(data['forwardsAmount']) &&
        isOptional(data['replyId'], isString) &&
        isArray(data['comments'], isDomainComment)
    );
};

export const assertDomainComment: TypeAssert<DomainComment> = function (data, errorMessage) {
    if (!isDomainComment(data)) {
        throw errorMessage(data);
    }
};