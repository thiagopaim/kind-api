export const calculateAge = (birthDate: Date) => {
  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()
  const birthYear = birthDate.getFullYear()

  let age = currentYear - birthYear

  // Check if the date of birth has not yet occurred this year
  const currentMonth = currentDate.getMonth()
  const birthMonth = birthDate.getMonth()
  const currentDay = currentDate.getDate()
  const birthDay = birthDate.getDate()

  if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) age--

  return age
}
