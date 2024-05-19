# `simulateMouseHover` Function Documentation

### Description

The `simulateMouseHover` function is designed to simulate a mouse hover over an element specified by its CSS selector. This function mimics user interaction by dispatching a sequence of mouse events (`mouseover`, `mouseenter`, `mousemove`, `mouseleave`, `mouseout`) and simulates smooth mouse movement. Can be useful to use within Tampermonkey/Greasemonkey scripts, or content scripts from browser extensions.

### Function Signature

```
function simulateMouseHover(selector);
```

### Parameters

- selector (string): The CSS selector of the element to hover over.

### Features

- Simulates the full sequence of mouse events for a hover (`mouseover`, `mouseenter`, `mousemove`).
- Simulates smooth mouse movement from one point to another.
- Optionally simulates the mouse leaving the element after a delay, including `mouseleave` and `mouseout` events.
- Calculates the event coordinates to ensure accurate simulation of mouse movements.

### Considerations

- The function uses `document.querySelector` to find the element. Ensure the selector is specific enough to target the correct element.
- The `simulateMouseHover` function should be called when the DOM is fully loaded to avoid issues with elements not yet being available.
- This function simulates smooth mouse movement and dispatches a comprehensive sequence of mouse events to closely mimic real user interactions.
