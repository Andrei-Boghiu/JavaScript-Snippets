/**
 * Simulates a user click on an element given its CSS selector.
 * @param {string} selector - The CSS selector of the element to be clicked.
 */
function simulateClick(selector) {
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

	// Get the element's bounding client rect
	const rect = element.getBoundingClientRect()
	const clientX = rect.left + rect.width / 2
	const clientY = rect.top + rect.height / 2

	// Helper function to create and dispatch a mouse event
	function triggerMouseEvent(type) {
		const event = new MouseEvent(type, {
			view: window,
			bubbles: true,
			cancelable: true,
			clientX: clientX,
			clientY: clientY,
			buttons: 1,
		})
		element.dispatchEvent(event)
	}

	// Helper function to create and dispatch a touch event
	function triggerTouchEvent(type) {
		const touch = new Touch({
			identifier: Date.now(),
			target: element,
			clientX: clientX,
			clientY: clientY,
			radiusX: 2.5,
			radiusY: 2.5,
			rotationAngle: 0,
			force: 1,
		})

		const event = new TouchEvent(type, {
			bubbles: true,
			cancelable: true,
			touches: [touch],
			targetTouches: [],
			changedTouches: [touch],
			shiftKey: true,
		})
		element.dispatchEvent(event)
	}

	// Simulate the sequence of mouse events
	triggerMouseEvent('mouseover')
	triggerMouseEvent('mousemove')
	triggerMouseEvent('mousedown')
	triggerMouseEvent('mouseup')
	triggerMouseEvent('click')

	// Simulate the sequence of touch events
	triggerTouchEvent('touchstart')
	triggerTouchEvent('touchend')

	// Optionally, blur the element if it was focused
	if (element.blur) {
		element.blur()
	}
}

// Example usage
document.addEventListener('DOMContentLoaded', () => {
	simulateClick('#myButton')
})
