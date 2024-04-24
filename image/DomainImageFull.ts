import { DomainImage, isDomainImage } from './DomainImage';
import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';


export type DomainImageFull =
    DomainImage
    & {
        description: string;
    }

export const isDomainImageFull: TypeGuard<DomainImageFull> = function (data: unknown): data is DomainImageFull {
    if (typeof data !== 'object') {
        return false;
    }

    if (
        typeof data['description'] !== 'string' ||
        !isDomainImage(data)
    ) {
        return false;
    }

    return true;
};

export const assertDomainImageFull: TypeAssert<DomainImageFull> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainImageFull(data)) {
        throwAssertError(variableName, typeName);
    }
};