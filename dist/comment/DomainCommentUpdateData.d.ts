import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
export type DomainCommentUpdateData = {
    comment: string;
};
export declare const isDomainCommentUpdateData: TypeGuard<DomainCommentUpdateData>;
export declare const assertDomainCommentUpdateData: TypeAssert<DomainCommentUpdateData>;
