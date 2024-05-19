# simulateTyping Function Documentation

### Description

The `simulateTyping` function is designed to simulate typing text into an element specified by its CSS selector. This function mimics user interaction by dispatching a sequence of keyboard events (`keydown`, `keypress`, `input`, `keyup`) for each character in the provided text. Can be useful to use within Tampermonkey/Greasemonkey scripts, or content scripts from browser extensions.

### Function Signature

```
function simulateTyping(selector, text)
```

### Parameters

- selector (string): The CSS selector of the element to type into.
- text (string): The text to be typed into the element.

### Features

- Simulates the full sequence of keyboard events (keydown, keypress, input, keyup) for each character.
- Focuses the element before typing to ensure it is ready to receive input.
- Updates the element's value to reflect the typed text.
- Handles standard text input, making it suitable for input fields, text areas, and other focusable elements.

### Usage

Ensure the DOM is fully loaded before calling the `simulateTyping` function. You can achieve this by using the `DOMContentLoaded` event or using the `waitForElement` function available in this repository.

```
simulateTyping('#myInput', 'Goodbye, World!');
```

### Considerations

- The function uses `document.querySelector` to find the element. Ensure the selector is specific enough to target the correct element.
- The `simulateTyping` function should be called when the DOM is fully loaded to avoid issues with elements not yet being available.
- This function simulates standard text input and updates the element's value accordingly, making it suitable for input fields, text areas, and other focusable elements.
