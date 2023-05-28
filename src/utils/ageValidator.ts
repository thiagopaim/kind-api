import { calculateAge } from './calculateAge'

export const ageValidator = (birthDate: Date) => {
  const age = calculateAge(birthDate)
  return age >= 18
}
