# safe-promise-types

This library is designed to make it easy to wrap any async/await function to make it return safe and avoid having to try-catch your await calls.

## Example

``````typescript
import SafePromise from 'safe-promise-types';
import crossFetch from 'cross-fetch';
(async () => {
    const data = await SafePromise(crossFetch)('//api.github.com/users/vladinator');
    if (data.ok) {
        const profile = await data.return.json();
        console.log(profile.name);
    } else {
        console.error(data.error);
    }
})();
``````

## Types

You can find the custom types in `lib/@types` and they serve as wrappers for success and error states.

```typescript
interface SafePromiseResponse { ok: boolean; }
interface SafePromiseSuccess<T> extends SafePromiseResponse { ok: true; return: T; }
interface SafePromiseError extends SafePromiseResponse { ok: false; error: string; }
```
