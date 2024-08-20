import { DomainUser } from '../../../user/DomainUser';
import { TypeGuard } from '../../../_helpers/types/guard.types';
import { TypeAssert } from '../../../_helpers/types/assert.types';
import { DomainCallAnswer } from '../../../call/DomainCallAnswer';
import { DomainCall } from '../../../call/DomainCall';
export type DomainNotificationCallAnswerData = {
    user: DomainUser;
    call: DomainCall;
    answer: DomainCallAnswer;
};
export declare const isDomainNotificationCallAnswerData: TypeGuard<DomainNotificationCallAnswerData>;
export declare const assertDomainNotificationCallAnswerData: TypeAssert<DomainNotificationCallAnswerData>;
