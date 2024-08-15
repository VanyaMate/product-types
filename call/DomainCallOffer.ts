import { isObject } from '../_helpers/lib/isObject';
import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';
import { isOptional } from '../_helpers/lib/isOptional';


export type DomainCallOffer = RTCSessionDescriptionInit;

export const isDomainCallOffer: TypeGuard<DomainCallOffer> = function (data: unknown): data is DomainCallOffer {
    if (!isObject(data)) {
        return false;
    }

    if (
        !isOptional(data['sdp'], 'string') ||
        !isOptional(data['type'], 'string')
    ) {
        return false;
    }

    return true;
};

export const assertDomainCallOffer: TypeAssert<DomainCallOffer> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainCallOffer(data)) {
        throwAssertError(variableName, typeName);
    }
};