import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString,
} from '@vanyamate/types-kit';


export type DomainCommentUpdateData = {
    comment: string;
}

export const isDomainCommentUpdateData: TypeGuard<DomainCommentUpdateData> = function (data): data is DomainCommentUpdateData {
    return !(
        !isObject(data) ||
        !isString(data['comment'])
    );
};

export const assertDomainCommentUpdateData: TypeAssert<DomainCommentUpdateData> = function (data, errorMessage) {
    if (!isDomainCommentUpdateData(data)) {
        throw errorMessage(data);
    }
};