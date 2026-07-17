/**
 * 🅿️ City Central Parking
 *
 * City Central Parking garage is the busiest in downtown. They need an
 * automated system to calculate parking fees. Different vehicle types
 * have different rates, and there's a daily maximum so customers
 * aren't overcharged.
 *
 * Rates (first hour / each additional hour):
 *   - "car":        $5 first hour, then $3/hour
 *   - "motorcycle": $3 first hour, then $2/hour
 *   - "bus":        $10 first hour, then $7/hour
 *
 * Daily Maximum (fee can never exceed this):
 *   - "car":        $30
 *   - "motorcycle": $18
 *   - "bus":        $60
 *
 * Rules:
 *   - Partial hours are rounded UP (e.g., 1.5 hours → 2 hours)
 *   - The fee should never exceed the daily maximum
 *   - If hours is 0 or negative, return -1
 *   - If vehicleType is not "car", "motorcycle", or "bus", return -1
 *
 * Examples:
 *   - car, 1 hour     → $5
 *   - car, 3 hours    → $5 + $3 + $3 = $11
 *   - car, 0.5 hours  → rounds up to 1 hour → $5
 *   - car, 24 hours   → $5 + 23×$3 = $74 → capped at $30
 *
 * @param {number} hours - Number of hours parked
 * @param {string} vehicleType - "car", "motorcycle", or "bus"
 * @returns {number} Parking fee or -1 for invalid input
 */
export function calculateParkingFee(hours, vehicleType) {
  // Your code here

  // hours code
  const totalHours = Math.ceil(hours);
  if (totalHours <= 0) {
    return -1;
  }
  // checking is this a vehicle or not
  const isItVehicle = isVehicle(vehicleType);

  if (isItVehicle === false) {
    return -1;
  }

  if (vehicleType === 'bus') {
    let fees = calculateBusFees(totalHours);
    if (fees > 60) {
      fees = 60;
    }
    return fees;
  } else if (vehicleType === 'motorcycle') {
    let fees = calculateMotorCycleFees(totalHours);
    if (fees > 18) {
      fees = 18;
    }
    return fees;
  } else {
    let fees = calculateCarFees(totalHours);
    if (fees > 30) {
      fees = 30;
    }
    return fees;
  }
}
function isVehicle(vehicleType) {
  if (
    vehicleType === 'bus' ||
    vehicleType === 'motorcycle' ||
    vehicleType === 'car'
  ) {
    return true;
  }
  return false;
}

function calculateCarFees(hour) {
  let totalhour = hour;
  let totalFees = 0;

  if (totalhour === 1) {
    return 5;
  }
  if (totalhour > 1) {
    totalhour = totalhour - 1;
    for (let i = 0; i < totalhour; i++) {
      totalFees += 3;
    }
    return totalFees + 5;
  }
}

function calculateBusFees(hour) {
  let totalhour = hour;
  let totalFees = 0;

  if (totalhour === 1) {
    return 10;
  }
  if (totalhour > 1) {
    totalhour = totalhour - 1;
    for (let i = 0; i < totalhour; i++) {
      totalFees += 7;
    }
    return totalFees + 10;
  }
}

function calculateMotorCycleFees(hour) {
  let totalhour = hour;
  let totalFees = 0;

  if (totalhour === 1) {
    return 3;
  }
  if (totalhour > 1) {
    totalhour = totalhour - 1;
    for (let i = 0; i < totalhour; i++) {
      totalFees += 2;
    }
    return totalFees + 3;
  }
}
