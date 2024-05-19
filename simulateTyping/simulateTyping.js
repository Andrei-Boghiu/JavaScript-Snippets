/**
 * Simulates typing text into an element given its CSS selector.
 * @param {string} selector - The CSS selector of the element to type into.
 * @param {string} text - The text to be typed.
 */
function simulateTyping(selector, text) {
	// Find the element using the selector
	const element = document.querySelector(selector)

	if (!element) {
		console.error(`No element found with selector: ${selector}`)
		return
	}

	// Ensure the element is focusable and focus it
	if (element.focus) {
		element.focus()
	}

	// Helper function to create and dispatch a keyboard event
	function triggerKeyboardEvent(type, key) {
		const event = new KeyboardEvent(type, {
			bubbles: true,
			cancelable: true,
			key: key,
			char: key,
			shiftKey: false,
			keyCode: key.charCodeAt(0),
		})
		element.dispatchEvent(event)
	}

	// Helper function to create and dispatch an input event
	function triggerInputEvent(value) {
		const event = new Event('input', {
			bubbles: true,
			cancelable: true,
		})
		element.value = value
		element.dispatchEvent(event)
	}

	// Simulate typing each character
	for (let i = 0; i < text.length; i++) {
		const char = text[i]
		triggerKeyboardEvent('keydown', char)
		triggerKeyboardEvent('keypress', char)
		triggerInputEvent(element.value + char)
		triggerKeyboardEvent('keyup', char)
	}
}

// Example usage
document.addEventListener('DOMContentLoaded', () => {
	simulateTyping('#myInput', 'Hello, World!')
})
