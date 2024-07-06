import { TypeGuard } from '../_helpers/types/guard.types';
import { isObject } from '../_helpers/lib/isObject';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';
import { DomainUser, isDomainUser } from '../user/DomainUser';


export type DomainPost = {
    id: string;
    message: string;
    redacted: boolean;
    creationData: string;
    author: DomainUser;
}

export const isDomainPost: TypeGuard<DomainPost> = function (data: unknown): data is DomainPost {
    if (!isObject(data)) {
        return false;
    }

    if (
        typeof data['id'] !== 'string' ||
        typeof data['message'] !== 'string' ||
        typeof data['redacted'] !== 'boolean' ||
        typeof data['creationData'] !== 'string' ||
        !isDomainUser(data['author'])
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