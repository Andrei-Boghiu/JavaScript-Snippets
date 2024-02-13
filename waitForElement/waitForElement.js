async function waitForElement(cssSelector, { targetNode = document.body, timeout = null, throwError = false } = {}) {
  // Parameters Validation Check
  if (typeof cssSelector !== "string") throw new Error(`Invalid parameter: 'cssSelector' must be a string representing a CSS Selector.`);

  if (targetNode && typeof targetNode !== "object") throw new Error(`Invalid parameter: 'targetNode' must be an object representing a DOM element.`);

  if (timeout !== null && typeof timeout !== "number" && timeout <= 0)
    throw new Error(`Invalid parameter: 'timeout' must be a positive number representing the timeout in milliseconds.`);

  if (typeof throwError !== "boolean") throw new Error(`Invalid parameter: 'throwError' must be a boolean representing whether to throw an error on timeout.`);

  // Check if selector is already present on page
  const alreadyPresent = document.querySelector(cssSelector);
  if (alreadyPresent) return alreadyPresent;

  // Timeout config
  const timeoutError = timeout > 0 ? new Error(`Timeout Error: ${timeout}ms exceeded for cssSelector ${cssSelector} in waitForElement().`) : undefined;
  const timeoutPromise = timeout ? new Promise((resolve) => setTimeout(() => resolve(timeoutError), timeout)) : null;

  // MutationObserver config
  const observerPromise = new Promise((resolve) => {
    const observer = new MutationObserver(() => {
      const elementFound = document.querySelector(cssSelector);

      if (elementFound) {
        observer.disconnect();
        resolve(elementFound);
      }
    });

    observer.observe(targetNode, {
      childList: true,
      subtree: true,
    });
  });

  return timeout ? Promise.race([observerPromise, timeoutPromise]) : observerPromise;
}
