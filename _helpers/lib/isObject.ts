export const isObject = function (data: unknown): data is Record<string, any> {
    return typeof data === 'object' && data !== null;
};