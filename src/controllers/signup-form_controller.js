import { Controller } from "stimulus"

const PASSWORD_LENGTH_REQUIREMENT = 1;

export default class extends Controller {
  static targets = [
    "emailError",
    "emailField",
    "passwordConfirmationError",
    "passwordConfirmationField",
    "passwordError",
    "passwordField",
    "userForm"
  ]

  connect() {
    this.persistedUsers = []
    this.formIsValid = false
  }

  submitForm(event) {
    event.preventDefault()
    event.stopPropagation()
    this.validateForm()
    if (this.formIsValid) {
      this.persistUser()
      this.element.reset()
      alert("User was saved!")
    }
  }

  validateForm() {
    this.formIsValid = true
    this.hideErrors()

    if (!/^\S+@\S+\.\S+$/.test(this.email)) {
      this.emailErrorTarget.removeAttribute("hidden")
      this.formIsValid = false
    }
    if (this.password.length < PASSWORD_LENGTH_REQUIREMENT) {
      this.passwordErrorTarget.removeAttribute("hidden")
      this.formIsValid = false
    }
    if (this.password !== this.passwordConfirmation) {
      this.passwordConfirmationErrorTarget.removeAttribute("hidden")
      this.formIsValid = false
    }
  }

  hideErrors() {
    this.emailErrorTarget.setAttribute("hidden", true)
    this.passwordConfirmationErrorTarget.setAttribute("hidden", true)
    this.passwordErrorTarget.setAttribute("hidden", true)
  }

  persistUser() {
    const user = {
      email: this.email,
      password: this.password
    }

    this.persistedUsers.push(user)
  }

  // Getters
  get email() {
    return this.emailFieldTarget.value;
  }

  get password() {
    return this.passwordFieldTarget.value;
  }

  get passwordConfirmation() {
    return this.passwordConfirmationFieldTarget.value;
  }
}
