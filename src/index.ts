import type { SafePromiseSuccess, SafePromiseError } from './@types';

export default function SafePromise<T extends (...args: Parameters<T>) => Promise<ReturnType<T> extends Promise<infer T> ? T : never>>(fn: T) {
    return async function (...args: Parameters<T>) {
        try {
            const data = await fn(...args);
            return { ok: true, return: data } as SafePromiseSuccess<typeof data>;
        } catch (error) {
            return { ok: false, error } as SafePromiseError;
        }
    };
}
