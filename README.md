# Age Calculator

A simple web-based Age Calculator built with JavaScript that calculates the exact age (years, months, and days) based on a user-entered birthdate. It handles invalid inputs, including future dates, and displays the result dynamically.


🌐 Live Demo
https://newton2n.github.io/-JavaScript-Age-Calculator/


## Features

- Calculates age accurately considering varying month lengths and leap years.
- Validates user input to ensure a proper date is entered.
- Detects and prevents future dates from being accepted.
- Displays age in years, months, and days.
- User-friendly error messages for invalid inputs.

## Usage

1. Enter your birthdate using the date input field.
2. Click the "Calculate" button.
3. Your age will be displayed below the button.
4. If you enter an invalid or future date, an appropriate error message will appear.

## Code Overview

The main logic resides in the `calculateAge` function, which:

- Parses the input date and checks if it is valid and not in the future.
- Calculates the difference between the current date and the birthdate in years, months, and days.
- Adjusts calculations to handle cases where the current day or month is less than the birth day or birth month.
- Uses a helper function `daysInMonth(year, month)` to get the correct number of days for each month.

## Example

```javascript
const userInput = document.getElementById("date");
const submit = document.getElementById("butt");
const output = document.getElementById("output");

submit.addEventListener("click", calculateAge);

function calculateAge() {
  const birthDate = new Date(userInput.value);
  const today = new Date();

  if (isNaN(birthDate)) {
    output.innerText = "Please enter a valid date.";
    return;
  }

  if (birthDate > today) {
    output.innerText = "Date cannot be in the future.";
    return;
  }

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const prevMonth = (today.getMonth() - 1 + 12) % 12;
    const prevYear = prevMonth === 11 ? today.getFullYear() - 1 : today.getFullYear();
    days += daysInMonth(prevYear, prevMonth);
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  output.innerText = `Your Age Is ${years} Year${years !== 1 ? "s" : ""} ${months} Month${months !== 1 ? "s" : ""} ${days} Day${days !== 1 ? "s" : ""}`;
}

function daysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}
