/**
 * Scrolls the specified element into the visible area of the browser window.
 * @param {string} selector - The CSS selector of the element to scroll into view.
 * @param {Object} options - Optional. Additional options for scrolling behavior.
 * @param {boolean} [options.smooth=false] - If true, the scroll will be smooth.
 * @param {string} [options.vertical='start'] - Vertical alignment: 'start', 'center', 'end', or 'nearest'.
 * @param {string} [options.horizontal='center'] - Horizontal alignment: 'start', 'center', 'end', or 'nearest'.
 * @param {Function} [options.callback=null] - Optional callback function to be called after scrolling.
 */
function scrollToElement(selector, options = {}) {
	const { smooth = false, vertical = 'start', horizontal = 'center', callback = null } = options

	// Find the element using the selector
	const element = document.querySelector(selector)

	if (!element) {
		console.error(`No element found with selector: ${selector}`)
		return
	}

	// Scroll the element into view with specified options
	element.scrollIntoView({
		behavior: smooth ? 'smooth' : 'auto',
		block: vertical,
		inline: horizontal,
	})

	// If a callback is provided, set up an event listener for the scroll event
	if (callback && typeof callback === 'function') {
		const onScrollEnd = () => {
			if (!element) return
			const rect = element.getBoundingClientRect()
			const isVisible =
				rect.top >= 0 &&
				rect.left >= 0 &&
				rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
				rect.right <= (window.innerWidth || document.documentElement.clientWidth)

			if (isVisible) {
				callback()
				window.removeEventListener('scroll', onScrollEnd)
			}
		}

		window.addEventListener('scroll', onScrollEnd)
		onScrollEnd() // Check immediately in case already in view
	}
}

// Example usage
document.addEventListener('DOMContentLoaded', () => {
	scrollToElement('#myElement', {
		smooth: true,
		vertical: 'center',
		horizontal: 'center',
		callback: () => {
			console.log('Scrolling completed!')
		},
	})
})
