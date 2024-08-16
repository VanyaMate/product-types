import { isObject } from '../_helpers/lib/isObject';
import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';
import { isArray } from '../_helpers/lib/isArray';


export type DomainCallOffer = {
    offer: RTCSessionDescriptionInit;
    candidates: unknown[];
};

export const isDomainCallOffer: TypeGuard<DomainCallOffer> = function (data: unknown): data is DomainCallOffer {
    if (!isObject(data)) {
        return false;
    }

    if (
        !isObject(data['offer']) ||
        !isArray(data['candidates'], (item: unknown): item is unknown => true)
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