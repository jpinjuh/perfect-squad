export function calculatePopularity(obj) {
  let popularitySum = 0,
    counter = 0;

  for (let prop in obj) {
    popularitySum += obj[prop].popular;
    counter++;
  }

  return popularitySum / counter;
}

export function calculateAge(dateString) {
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
}
