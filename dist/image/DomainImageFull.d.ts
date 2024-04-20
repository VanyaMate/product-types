import { TypeAssert, TypeGuard } from '../_helpers/types';
import { DomainImage } from './DomainImage';
export type DomainImageFull = DomainImage & {
    description: string;
};
export declare const isDomainImageFull: TypeGuard<DomainImageFull>;
export declare const assertDomainImageFull: TypeAssert<DomainImageFull>;
