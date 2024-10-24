import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString, isOptional,
} from '@vanyamate/types-kit';


export type DomainCommentCreateData = {
    comment: string;
    replyId?: string | undefined;
}

export const isDomainCommentCreateData: TypeGuard<DomainCommentCreateData> = function (data): data is DomainCommentCreateData {
    return (
        isObject(data) &&
        isString(data['comment']) &&
        isOptional(data['replyId'], isString)
    );
};

export const assertDomainCommentCreateData: TypeAssert<DomainCommentCreateData> = function (data, errorMessage) {
    if (!isDomainCommentCreateData(data)) {
        throw errorMessage(data);
    }
};