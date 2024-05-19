# simulateClick Function Documentation

### Description

The `simulateClick` function is designed to simulate a user click on an element specified by its CSS selector. This function mimics user interaction by dispatching a sequence of mouse and touch events, ensuring compatibility with a wide range of interactive elements. Can be useful to use within Tampermonkey/Greasemonkey scripts, or content scripts from browser extensions.

### Function Signature

```
function simulateClick(selector);
```

### Parameters

- selector (string): The CSS selector of the element to be clicked.

### Features

- Simulates the full sequence of mouse events (`mouseover`, `mousemove`, `mousedown`, `mouseup`, `click`).
- Simulates touch events (`touchstart`, `touchend`) for compatibility with touch-responsive elements.
- Focuses the element before simulating the click and optionally blurs it afterward.
- Calculates the event coordinates to be at the center of the target element for accurate simulation.

### Usage

Ensure the DOM is fully loaded before calling the `simulateClick` function. You can achieve this by using the `DOMContentLoaded` event or using the `waitForElement` function available in this repository.

```
simulateClick('#myButton');
```

### Considerations

- The function uses `document.querySelector` to find the element. Ensure the selector is specific enough to target the correct element.
- The `simulateClick` function should be called when the DOM is fully loaded to avoid issues with elements not yet being available.
- This function simulates both mouse and touch events, making it suitable for a variety of interactive elements.
