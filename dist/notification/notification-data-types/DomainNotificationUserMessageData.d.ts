import { TypeGuard } from '../../_helpers/types/guard.types';
import { TypeAssert } from '../../_helpers/types/assert.types';
import { DomainMessage } from '../../message/DomainMessage';
import { DomainDialogue } from '../../dialog/DomainDialogue';
export type DomainNotificationUserMessageData = {
    dialogue: DomainDialogue;
    message: DomainMessage;
};
export declare const isDomainNotificationUserMessageData: TypeGuard<DomainNotificationUserMessageData>;
export declare const assertDomainNotificationUserMessageData: TypeAssert<DomainNotificationUserMessageData>;
