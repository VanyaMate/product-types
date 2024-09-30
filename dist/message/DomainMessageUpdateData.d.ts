import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
import { DomainMessageType } from './DomainMessage';
export type DomainMessageUpdateData = {
    message: string;
    messageType: DomainMessageType;
};
export declare const isDomainMessageUpdateData: TypeGuard<DomainMessageUpdateData>;
export declare const assertDomainMessageUpdateData: TypeAssert<DomainMessageUpdateData>;
