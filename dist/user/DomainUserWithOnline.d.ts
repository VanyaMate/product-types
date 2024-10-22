import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
import { DomainUser } from './DomainUser';
export type DomainUserWithOnline = DomainUser & {
    online: boolean;
};
export declare const isDomainUserWithOnline: TypeGuard<DomainUserWithOnline>;
export declare const assertDomainUserWithOnline: TypeAssert<DomainUserWithOnline>;
