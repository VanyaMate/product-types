import { TypeGuard } from '../_helpers/types/guard.types';
import { isObject } from '../_helpers/lib/isObject';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';
import { DomainUser, isDomainUser } from '../user/DomainUser';


export enum DomainMessageType {
    TEXT  = 'text',
    IMAGE = 'image',
    LINK  = 'link',
}

export type DomainMessage = {
    id: string;
    dialogueId: string;
    message: string;
    redacted: boolean;
    read: boolean;
    creationDate: string;
    type: DomainMessageType;
    author: DomainUser;
}

export const isDomainMessage: TypeGuard<DomainMessage> = function (data: unknown): data is DomainMessage {
    if (!isObject(data)) {
        return false;
    }

    if (
        typeof data['id'] !== 'string' ||
        typeof data['dialogueId'] !== 'string' ||
        typeof data['message'] !== 'string' ||
        typeof data['redacted'] !== 'boolean' ||
        typeof data['read'] !== 'boolean' ||
        typeof data['creationDate'] !== 'string' ||
        typeof data['type'] !== 'string' ||
        !isDomainUser(data['author'])
    ) {
        return false;
    }

    return true;
};

export const assertDomainMessage: TypeAssert<DomainMessage> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainMessage(data)) {
        throwAssertError(variableName, typeName);
    }
};