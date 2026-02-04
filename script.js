function calculateAge() {
  const dobInput = document.getElementById("dob").value;
  const currentInput = document.getElementById("currentDate").value;

  if (!dobInput || !currentInput) {
    document.getElementById("ageResult").textContent = "Please select both dates.";
    document.getElementById("daysRemaining").textContent = "";
    return;
  }

  const dob = new Date(dobInput);
  const today = new Date(currentInput);

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    const lastMonthDays = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    days += lastMonthDays;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  document.getElementById("ageResult").textContent =
    `Age: ${years} years, ${months} months, ${days} days`;

  // 🔹 Days remaining until next birthday
  let nextBirthday = new Date(
    today.getFullYear(),
    dob.getMonth(),
    dob.getDate()
  );

  if (nextBirthday <= today) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
  }

  const diffTime = nextBirthday - today;
  const daysRemaining = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  document.getElementById("daysRemaining").textContent =
    `Days until next birthday: ${daysRemaining} days`;
}
 
