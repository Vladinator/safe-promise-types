import type { SafePromiseSuccess, SafePromiseError } from './@types';
export default function SafePromise<T extends (...args: Parameters<T>) => Promise<ReturnType<T> extends Promise<infer T> ? T : never>>(fn: T): (...args: Parameters<T>) => Promise<SafePromiseError | SafePromiseSuccess<Awaited<ReturnType<T> extends Promise<infer T> ? T : never>>>;
//# sourceMappingURL=index.d.ts.map