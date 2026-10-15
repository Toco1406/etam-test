import { useState } from 'react'
import './SignupForm.css'

const FIELDS = [
  { name: 'email', label: 'Adresse e-mail', type: 'email', autoComplete: 'email' },
  { name: 'lastName', label: 'Nom', type: 'text', autoComplete: 'family-name' },
  { name: 'firstName', label: 'Prénom', type: 'text', autoComplete: 'given-name' },
  { name: 'phone', label: 'Numéro de téléphone', type: 'tel', autoComplete: 'tel' },
]

const INITIAL_VALUES = { email: '', lastName: '', firstName: '', phone: '' }

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_REGEX = /^(?:(?:\+|00)33\s?|0)[1-9](?:[\s.-]?\d{2}){4}$/

function validate(values) {
  const errors = {}

  if (!values.email.trim()) {
    errors.email = 'Veuillez saisir votre adresse e-mail.'
  } else if (!EMAIL_REGEX.test(values.email.trim())) {
    errors.email = 'L’adresse e-mail n’est pas valide.'
  }

  if (values.lastName.trim().length < 2) {
    errors.lastName = 'Veuillez saisir votre nom.'
  }

  if (values.firstName.trim().length < 2) {
    errors.firstName = 'Veuillez saisir votre prénom.'
  }

  if (!values.phone.trim()) {
    errors.phone = 'Veuillez saisir votre numéro de téléphone.'
  } else if (!PHONE_REGEX.test(values.phone.trim())) {
    errors.phone = 'Veuillez saisir un numéro français valide (ex. : 06 12 34 56 78).'
  }

  return errors
}

function SignupForm({ text, submitLabel, successMessage }) {
  const [values, setValues] = useState(INITIAL_VALUES)
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })

    if (errors[name]) {
      setErrors({ ...errors, [name]: undefined })
    }
  }

  function handleSubmit(event) {
    event.preventDefault()

    const newErrors = validate(values)
    setErrors(newErrors)

    const firstError = Object.keys(newErrors)[0]
    if (firstError) {
      event.target.elements[firstError].focus()
      return
    }

    console.log('Inscription envoyée :', values)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <p className="signup__success" role="status">
        {successMessage}
      </p>
    )
  }

  return (
    <form className="signup" onSubmit={handleSubmit} noValidate>
      <p className="signup__intro">{text}</p>

      {FIELDS.map((field) => {
        const error = errors[field.name]
        const errorId = `${field.name}-error`

        return (
          <div key={field.name} className="signup__field">
            <label htmlFor={field.name} className="signup__label">
              {field.label}
            </label>
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              autoComplete={field.autoComplete}
              value={values[field.name]}
              onChange={handleChange}
              required
              aria-invalid={Boolean(error)}
              aria-describedby={error ? errorId : undefined}
              className={`signup__input ${error ? 'signup__input--error' : ''}`}
            />
            {error && (
              <p id={errorId} className="signup__error">
                {error}
              </p>
            )}
          </div>
        )
      })}

      <button type="submit" className="signup__submit">
        {submitLabel}
      </button>
    </form>
  )
}

export default SignupForm