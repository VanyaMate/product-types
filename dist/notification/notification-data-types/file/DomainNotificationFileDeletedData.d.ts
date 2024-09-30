import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { DomainFile } from '../../../file/DomainFile';
export type DomainNotificationFileDeletedData = {
    file: DomainFile;
};
export declare const isDomainNotificationFileDeletedData: TypeGuard<DomainNotificationFileDeletedData>;
export declare const assertDomainNotificationFileDeletedData: TypeAssert<DomainNotificationFileDeletedData>;
