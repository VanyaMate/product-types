import { DomainUser } from './DomainUser';
import { DomainUserNameInfo } from './DomainUserNameInfo';
import { DomainUserContactsInfo } from './DomainUserContactsInfo';
import { TypeAssert, TypeGuard } from '../_helpers/types';
export type DomainUserFull = DomainUser & {
    nameInfo: DomainUserNameInfo;
    contacts: DomainUserContactsInfo;
};
export declare const isDomainUserFull: TypeGuard<DomainUserFull>;
export declare const assertDomainUserFull: TypeAssert<DomainUserFull>;
