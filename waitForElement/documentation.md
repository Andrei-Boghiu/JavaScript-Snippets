# waitForElement

### Description

The `waitForElement` function asynchronously waits for a specified CSS selector to appear in the document. It utilizes a combination of initial checks and a MutationObserver to efficiently handle dynamic content loading scenarios. Can be useful to use within Tampermonkey/Greasemonkey scripts, or content scripts from browser extensions.

### Parameters

- `cssSelector` (String): A valid CSS selector string representing the element to be waited for.

- `options` (Object, optional): An optional configuration object with the following properties:

  - `targetNode` (Object, default: `document.body`): The DOM element to observe for changes. If not specified, the entire document body is observed.

  - `timeout` (Number, default: `null`): The maximum time to wait for the element, in milliseconds. If the element is not found within this time, the function resolves with `undefined` or throws an error based on the `throwError` option.

  - `throwError` (Boolean, default: `false`): If set to `true`, the function throws an error on timeout; otherwise, it resolves with `undefined`. Ignored if `timeout` is not specified.

### Returns

- A promise that resolves with the found element once it is present in the document.

### Usage

```
try {
  const element = await waitForElement('.my-selector', { timeout: 5000, throwError: true });
  // Proceed with further actions using the found element.
} catch (error) {
  console.error(error.message); // Handle timeout error or other validation errors.
}
```

### Notes

- If the element is already present in the document, the function returns it immediately without waiting.

- If `timeout` is not specified, the function will wait indefinitely until the specified selector is present on the page.

- The function combines initial checks and a MutationObserver for efficient handling of dynamic content loading.

- Validation errors are thrown for invalid parameters, enhancing code reliability.
