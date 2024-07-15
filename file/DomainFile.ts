import { TypeGuard } from '../_helpers/types/guard.types';
import { isObject } from '../_helpers/lib/isObject';
import { TypeAssert } from '../_helpers/types/assert.types';
import { throwAssertError } from '../_helpers/lib/throwAssertError';
import { DomainUser, isDomainUser } from '../user/DomainUser';


export type DomainFile = {
    id: string;
    fileName: string;
    filePath: string;
    fileType: string;
    fileOriginalName: string;
    fileWeight: number;
    uploadDate: string;
    owner: DomainUser;
}

export const isDomainFile: TypeGuard<DomainFile> = function (data: unknown): data is DomainFile {
    if (!isObject(data)) {
        return false;
    }

    if (
        typeof data['id'] !== 'string' ||
        typeof data['fileName'] !== 'string' ||
        typeof data['filePath'] !== 'string' ||
        typeof data['fileType'] !== 'string' ||
        typeof data['fileOriginalName'] !== 'string' ||
        typeof data['fileWeight'] !== 'number' ||
        typeof data['uploadDate'] !== 'string' ||
        !isDomainUser(data['owner'])
    ) {
        return false;
    }

    return true;
};

export const assertDomainFile: TypeAssert<DomainFile> = function (data: unknown, variableName: string, typeName: string) {
    if (!isDomainFile(data)) {
        throwAssertError(variableName, typeName);
    }
};