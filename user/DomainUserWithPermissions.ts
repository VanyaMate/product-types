import { DomainUser, isDomainUser } from './DomainUser';
import {
    DomainUserPermissions,
    isDomainUserPermissions,
} from './DomainUserPermissions';
import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';


export type DomainUserWithPermissions = DomainUser & {
    permissions: DomainUserPermissions;
}

export const isDomainUserWithPermissions: TypeGuard<DomainUserWithPermissions> = function (data: unknown): data is DomainUserWithPermissions {
    if (
        !isDomainUser(data) ||
        !isDomainUserPermissions(data['permissions'])
    ) {
        return false;
    }

    return true;
};

export const assertDomainUserWithPermissions: TypeAssert<DomainUserWithPermissions> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainUserWithPermissions(data)) {
        throwAssertError(variableName, typeName);
    }
};