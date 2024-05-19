/**
 * Simulates a mouse hover over an element given its CSS selector.
 * @param {string} selector - The CSS selector of the element to hover over.
 */

function simulateMouseHover(selector) {
	// Find the element using the selector
	const element = document.querySelector(selector)

	if (!element) {
		console.error(`No element found with selector: ${selector}`)
		return
	}

	// Get the element's bounding client rect for position calculations
	const rect = element.getBoundingClientRect()
	const centerX = rect.left + rect.width / 2
	const centerY = rect.top + rect.height / 2

	// Helper function to create and dispatch a mouse event
	function triggerMouseEvent(type, clientX, clientY) {
		const event = new MouseEvent(type, {
			view: window,
			bubbles: true,
			cancelable: true,
			clientX: clientX,
			clientY: clientY,
		})
		element.dispatchEvent(event)
	}

	// Helper function to simulate the movement of the mouse
	function simulateMouseMovement(fromX, fromY, toX, toY, steps) {
		const stepX = (toX - fromX) / steps
		const stepY = (toY - fromY) / steps

		for (let i = 0; i <= steps; i++) {
			const currentX = fromX + stepX * i
			const currentY = fromY + stepY * i
			triggerMouseEvent('mousemove', currentX, currentY)
		}
	}

	// Simulate the sequence of mouse events for a hover
	triggerMouseEvent('mouseover', centerX, centerY)
	triggerMouseEvent('mouseenter', centerX, centerY)
	simulateMouseMovement(rect.left, rect.top, centerX, centerY, 20)
	triggerMouseEvent('mousemove', centerX, centerY)

	// Optional: Simulate mouse leaving the element
	setTimeout(() => {
		simulateMouseMovement(centerX, centerY, rect.right, rect.bottom, 20)
		triggerMouseEvent('mouseleave', rect.right, rect.bottom)
		triggerMouseEvent('mouseout', rect.right, rect.bottom)
	}, 1000) // Hover duration
}

// Example usage
document.addEventListener('DOMContentLoaded', () => {
	simulateMouseHover('#myElement')
})
