import { DomainUser } from './DomainUser';
import { DomainUserPermissions } from './DomainUserPermissions';
import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
export type DomainUserWithPermissions = DomainUser & {
    permissions: DomainUserPermissions;
};
export declare const isDomainUserWithPermissions: TypeGuard<DomainUserWithPermissions>;
export declare const assertDomainUserWithPermissions: TypeAssert<DomainUserWithPermissions>;
