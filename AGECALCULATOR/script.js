let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let age = document.getElementById("age");

function calculateAge() {
  let birthDate = new Date(userInput.value);
  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();

  let currentDate = new Date();
  let d2 = currentDate.getDate();
  let m2 = currentDate.getMonth() + 1;
  let y2 = currentDate.getFullYear();

  let d3, m3, y3;

  y3 = y2 - y1;

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 - (m1 - m2);
  }

  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    if (m3 < 0) {
      m3 = 11;
      y3--;
    }
    d3 = getDaysInMonth(m2 - 1, y2) + d2 - d1;
  }

  age.innerHTML = `: ${y3} years, ${m3} months and ${d3} days.`;
}

function getDaysInMonth(month, year) {
  return new Date(year, month + 1, 0).getDate();
}
