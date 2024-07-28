import { TypeGuard } from '../../_helpers/types/guard.types';
import { TypeAssert } from '../../_helpers/types/assert.types';
import { DomainFile } from '../../file/DomainFile';
export type DomainNotificationFileUpdatedData = {
    previousFile: DomainFile;
    newFile: DomainFile;
};
export declare const isDomainNotificationFileUpdatedData: TypeGuard<DomainNotificationFileUpdatedData>;
export declare const assertDomainNotificationFileUpdatedData: TypeAssert<DomainNotificationFileUpdatedData>;
