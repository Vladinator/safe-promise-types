import SafePromise from '..';

async function FakeServiceEndpoint(result: string, error: boolean = false): Promise<string> {
    return new Promise((resolve, reject) => {
        if (!error) {
            resolve(`The result: ${result}`);
        } else {
            reject(`Ops!`);
        }
    });
}

(async () => {

    const response1 = await FakeServiceEndpoint("Hello World");
    console.log("response1", response1);

    try {
        const response2 = await FakeServiceEndpoint("Hello World", true);
        console.log("response2", response2);
    } catch (ex) {
        console.log("response2 threw", ex);
    }

    const SafeFakeServiceEndpoint = SafePromise(FakeServiceEndpoint);

    const response3 = await SafeFakeServiceEndpoint("Hello World");
    console.log("response3", response3);

    const response4 = await SafeFakeServiceEndpoint("Hello World", true);
    console.log("response4", response4);

})();
