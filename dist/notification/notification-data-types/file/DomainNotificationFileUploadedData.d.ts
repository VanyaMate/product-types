import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { DomainFile } from '../../../file/DomainFile';
export type DomainNotificationFileUploadedData = {
    file: DomainFile;
};
export declare const isDomainNotificationFileUploadedData: TypeGuard<DomainNotificationFileUploadedData>;
export declare const assertDomainNotificationFileUploadedData: TypeAssert<DomainNotificationFileUploadedData>;
