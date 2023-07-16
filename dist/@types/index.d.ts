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
//# sourceMappingURL=index.d.ts.map