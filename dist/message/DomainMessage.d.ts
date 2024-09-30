import { TypeGuard } from '../_helpers/types/guard.types';
import { TypeAssert } from '../_helpers/types/assert.types';
import { DomainUser } from '../user/DomainUser';
export declare enum DomainMessageType {
    TEXT = "text",
    IMAGE = "image",
    LINK = "link"
}
export type DomainMessage = {
    id: string;
    dialogueId: string;
    message: string;
    redacted: boolean;
    read: boolean;
    creationDate: number;
    type: DomainMessageType;
    author: DomainUser;
};
export declare const isDomainMessage: TypeGuard<DomainMessage>;
export declare const assertDomainMessage: TypeAssert<DomainMessage>;
