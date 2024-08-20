import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
import { DomainMessageType } from './DomainMessage';
export type DomainMessageCreateData = {
    message: string;
    messageType: DomainMessageType;
};
export declare const isDomainMessageCreateData: TypeGuard<DomainMessageCreateData>;
export declare const assertDomainMessageCreateData: TypeAssert<DomainMessageCreateData>;
