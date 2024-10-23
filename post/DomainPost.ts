import { TypeGuard } from '../_helpers/types/guard.types';
import { isObject } from '../_helpers/lib/isObject';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';
import { DomainUser, isDomainUser } from '../user/DomainUser';
import { isArray, isBoolean, isNumber, isString } from '@vanyamate/types-kit';
import { DomainComment, isDomainComment } from '../comment/DomainComment';


export type DomainPost = {
    id: string;
    message: string;
    redacted: boolean;
    creationData: number;
    author: DomainUser;
    liked: boolean;
    likesAmount: number;
    forwardsAmount: number;
    commentsAmount: number;
    comments: Array<DomainComment>;
}

export const isDomainPost: TypeGuard<DomainPost> = function (data: unknown): data is DomainPost {
    if (!isObject(data)) {
        return false;
    }

    if (
        !isString(data['id']) ||
        !isString(data['message']) ||
        !isBoolean(data['redacted']) ||
        !isNumber(data['creationData']) ||
        !isDomainUser(data['author']) ||
        !isBoolean(data['liked']) ||
        !isNumber(data['likesAmount']) ||
        !isNumber(data['forwardsAmount']) ||
        !isNumber(data['commentsAmount']) ||
        !isArray(data['comments'], isDomainComment)
    ) {
        return false;
    }

    return true;
};

export const assertDomainPost: TypeAssert<DomainPost> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainPost(data)) {
        throwAssertError(variableName, typeName);
    }
};