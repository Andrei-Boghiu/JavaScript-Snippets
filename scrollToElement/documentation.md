# scrollToElement Function Documentation

### Description

The `scrollToElement` function is designed to scroll the specified element into the visible area of the browser window. Includes additional options for scrolling behavior, vertical and horizontal alignment, and callback support. Can be useful to use within Tampermonkey/Greasemonkey scripts, or content scripts from browser extensions.

### Function Signature

```
function scrollToElement(selector, options = {});
```

### Parameters

- selector (string): The CSS selector of the element to scroll into view.
- options (Object): Optional. Additional options for scrolling behavior.
  - smooth (boolean): If true, the scroll will be smooth. Defaults to false. Might not be supported for all browsers!
  - vertical (string): Vertical alignment: 'start', 'center', 'end', or 'nearest'. Defaults to 'start'.
  - horizontal (string): Horizontal alignment: 'start', 'center', 'end', or 'nearest'. Defaults to 'center'.
  - callback (Function): Optional callback function to be called after scrolling is completed.

### Features

- Uses the `Element.scrollIntoView` method to bring the element into the visible area of the browser window.
- Supports both smooth and instant scrolling.
- Allows specifying vertical and horizontal alignment of the element when scrolled into view.
- Supports callback functions to execute additional logic once scrolling is completed.

### Usage

Ensure the DOM is fully loaded before calling the `scrollToElement` function. You can achieve this by using the `DOMContentLoaded` event or using the `waitForElement` function available in this repository.

```
document.addEventListener('DOMContentLoaded', () => {
    scrollToElement('#myElement', {
        smooth: true,
        vertical: 'center',
        horizontal: 'center',
        callback: () => {
            console.log('Scrolling completed!');
            // here you can simulate other user actions as clicking or hovering on the element.
        }
    });
});
```

### Considerations

- The function uses `document.querySelector` to find the element. Ensure the selector is specific enough to target the correct element.
- The `scrollToElement` function should be called when the DOM is fully loaded to avoid issues with elements not yet being available.
- The smooth scrolling option may not be supported in all browsers. Ensure compatibility with your target browsers.
- The callback function checks the visibility of the element and ensures it is fully in view before execution.
