import { TypeGuard, TypeAssert } from '@vanyamate/types-kit';
export type DomainCommentCreateData = {
    comment: string;
};
export declare const isDomainCommentCreateData: TypeGuard<DomainCommentCreateData>;
export declare const assertDomainCommentCreateData: TypeAssert<DomainCommentCreateData>;
