import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString, isNumber, isBoolean, isArray,
} from '@vanyamate/types-kit';
import { DomainUser, isDomainUser } from '../user/DomainUser';


export type DomainComment = {
    id: string;
    comment: string;
    author: DomainUser;
    creationDate: number;
    redacted: boolean;
    liked: boolean;
    likes: number;
    replies: number;
    forwards: number;
    comments: Array<DomainComment>;
}

export const isDomainComment: TypeGuard<DomainComment> = function (data): data is DomainComment {
    return !(
        !isObject(data) ||
        !isString(data['id']) ||
        !isString(data['comment']) ||
        !isDomainUser(data['author']) ||
        !isNumber(data['creationDate']) ||
        !isBoolean(data['redacted']) ||
        !isBoolean(data['liked']) ||
        !isNumber(data['likes']) ||
        !isNumber(data['replies']) ||
        !isNumber(data['forwards']) ||
        !isArray(data['comments'], isDomainComment)
    );
};

export const assertDomainComment: TypeAssert<DomainComment> = function (data, errorMessage) {
    if (!isDomainComment(data)) {
        throw errorMessage(data);
    }
};