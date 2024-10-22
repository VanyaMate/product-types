import {
    TypeGuard,
    TypeAssert,
    isObject,
    isString,
} from '@vanyamate/types-kit';


export type DomainCommentCreateData = {
    comment: string;
}

export const isDomainCommentCreateData: TypeGuard<DomainCommentCreateData> = function (data): data is DomainCommentCreateData {
    return !(
        !isObject(data) ||
        !isString(data['comment'])
    );
};

export const assertDomainCommentCreateData: TypeAssert<DomainCommentCreateData> = function (data, errorMessage) {
    if (!isDomainCommentCreateData(data)) {
        throw errorMessage(data);
    }
};