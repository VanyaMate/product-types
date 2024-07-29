export const isArray = function <T> (data: unknown, type: string | ((item: unknown) => item is T)): boolean {
    const _isArray = Array.isArray(data);

    if (_isArray) {
        if (typeof type === 'string') {
            return data.every((item) => typeof item === type);
        } else {
            return data.every(type);
        }
    }

    return false;
};