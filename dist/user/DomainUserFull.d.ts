import { TypeGuard } from '../_helpers/types/guard.types';
import { DomainUserNameInfo } from './DomainUserNameInfo';
import { DomainUserContactsInfo } from './DomainUserContactsInfo';
import { TypeAssert } from '../_helpers/types/assert.types';
import { DomainUserPermissions } from './DomainUserPermissions';
import { DomainUser } from './DomainUser';
export type DomainUserFull = DomainUser & {
    background: string | null;
    nameInfo: DomainUserNameInfo;
    contacts: DomainUserContactsInfo;
    permissions: DomainUserPermissions;
};
export declare const isDomainUserFull: TypeGuard<DomainUserFull>;
export declare const assertDomainUserFull: TypeAssert<DomainUserFull>;
