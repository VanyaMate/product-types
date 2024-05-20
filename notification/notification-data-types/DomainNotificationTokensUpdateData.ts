import { TypeGuard } from '../../_helpers/types/guard.types';
import { TypeAssert } from '../../_helpers/types/assert.types';
import { throwAssertError } from '../../_helpers/lib/throwAssertError';
import { DomainTokens, isDomainTokens } from '../../token/DomainTokens';


export type DomainNotificationTokensUpdateData = DomainTokens;

export const isDomainNotificationTokensUpdateData: TypeGuard<DomainNotificationTokensUpdateData> = function (data: unknown): data is DomainNotificationTokensUpdateData {
    return isDomainTokens(data);
};

export const assertDomainNotificationTokensUpdateData: TypeAssert<DomainNotificationTokensUpdateData> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainNotificationTokensUpdateData(data)) {
        throwAssertError(variableName, typeName);
    }
};