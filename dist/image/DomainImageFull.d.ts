import { DomainImage } from './DomainImage';
import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
export type DomainImageFull = DomainImage & {
    description: string;
};
export declare const isDomainImageFull: TypeGuard<DomainImageFull>;
export declare const assertDomainImageFull: TypeAssert<DomainImageFull>;
