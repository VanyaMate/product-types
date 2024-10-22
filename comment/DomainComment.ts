import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString, isNumber, isBoolean,
} from '@vanyamate/types-kit';
import { DomainUser, isDomainUser } from '../user/DomainUser';


export type DomainComment = {
    id: string;
    comment: string;
    author: DomainUser;
    creationDate: number;
    redacted: boolean;
}

export const isDomainComment: TypeGuard<DomainComment> = function (data): data is DomainComment {
    return !(
        !isObject(data) ||
        !isString(data['id']) ||
        !isString(data['comment']) ||
        !isDomainUser(data['author']) ||
        !isNumber(data['creationDate']) ||
        !isBoolean(data['redacted'])
    );
};

export const assertDomainComment: TypeAssert<DomainComment> = function (data, errorMessage) {
    if (!isDomainComment(data)) {
        throw errorMessage(data);
    }
};