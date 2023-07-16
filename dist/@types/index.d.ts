export interface SafePromiseResponse {
    ok: boolean;
}
export interface SafePromiseSuccess<T> extends SafePromiseResponse {
    ok: true;
    return: T;
}
export interface SafePromiseError extends SafePromiseResponse {
    ok: false;
    error: string;
}
export default function SafePromise<T extends (...args: Parameters<T>) => Promise<ReturnType<T> extends Promise<infer T> ? T : never>>(fn: T): (this: any, ...args: Parameters<T>) => Promise<SafePromiseError | SafePromiseSuccess<Awaited<ReturnType<T> extends Promise<infer T> ? T : never>>>;
//# sourceMappingURL=index.d.ts.map