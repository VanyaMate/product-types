import { TypeAssert, TypeGuard } from '../_helpers/types';
export type DomainNotification = {
    dateMs: number;
    type: string;
    data: string;
};
export declare const isDomainNotification: TypeGuard<DomainNotification>;
export declare const assertDomainNotification: TypeAssert<DomainNotification>;
