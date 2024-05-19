# simulateClick Function Documentation

### Overview

The `simulateClick` function is designed to simulate a user click on an element specified by its CSS selector. This function mimics user interaction by dispatching a sequence of mouse and touch events, ensuring compatibility with a wide range of interactive elements.

### Function Signature

`function simulateClick(selector)`

### Parameters

- selector (string): The CSS selector of the element to be clicked.

### Features

- Simulates the full sequence of mouse events (`mouseover`, `mousemove`, `mousedown`, `mouseup`, `click`).
- Simulates touch events (`touchstart`, `touchend`) for compatibility with touch-responsive elements.
- Focuses the element before simulating the click and optionally blurs it afterward.
- Calculates the event coordinates to be at the center of the target element for accurate simulation.

### Usage

Ensure the DOM is fully loaded before calling the simulateClick function. You can achieve this by using the DOMContentLoaded event or using the `waitForElement` function available in this repository.

`simulateClick('#myButton');`
