"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function SafePromise(fn) {
    return async function (...args) {
        try {
            const data = await fn.apply(this, args);
            return { ok: true, return: data };
        }
        catch (error) {
            return { ok: false, error };
        }
    };
}
exports.default = SafePromise;
//# sourceMappingURL=index.js.map