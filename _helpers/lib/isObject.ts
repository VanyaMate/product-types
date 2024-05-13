export const isObject = function (data: unknown): boolean {
    return typeof data === 'object' && data !== null;
};