import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
export type DomainLanguageWordCreateData = {
    original: string;
    translations: Array<string>;
    notice: string;
    folderId: string;
};
export declare const isDomainLanguageWordCreateData: TypeGuard<DomainLanguageWordCreateData>;
export declare const assertDomainLanguageWordCreateData: TypeAssert<DomainLanguageWordCreateData>;
