export const isOptional = function (data: unknown, type: string, isArray: boolean = false): boolean {
    const isEmpty = typeof data === 'undefined';
    if (isEmpty) return true;

    if (isArray) {
        return Array.isArray(data) && data.every((item) => typeof item === type);
    }

    return typeof data === type;
};