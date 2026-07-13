/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  // Use AND (&&) logic to ensure the size/type is none of the valid options
  if (size !== 'small' && size !== 'medium' && size !== 'large') {
    return -1; // Changed to number -1 as per return type documentation
  }

  if (
    type !== 'regular' &&
    type !== 'latte' &&
    type !== 'cappuccino' &&
    type !== 'mocha'
  ) {
    return -1;
  }

  // Changed const to let so the price can be updated
  let price = 0;

  // Switched case targets to match the incoming string variables
  switch (size) {
    case 'small':
      price += 3.0;
      break;
    case 'medium':
      price += 4.0;
      break;
    case 'large':
      price += 5.0;
      break;
    default:
      break;
  }

  switch (type) {
    case 'regular':
      price += 0.0;
      break;
    case 'latte':
      price += 1.0;
      break;
    case 'cappuccino':
      price += 1.5;
      break;
    case 'mocha':
      price += 2.0;
      break;
    default:
      break;
  }

  // Completed the extras checks
  if (extras.whippedCream) {
    price += 0.5;
  }

  if (extras.extraShot) {
    price += 0.75;
  }

  // Rounded to 2 decimal places and converted back to a number
  return Number(price.toFixed(2));
}
