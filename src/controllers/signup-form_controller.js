import { Controller } from "stimulus"

const PASSWORD_LENGTH_REQUIREMENT = 1;
const USERNAME_LENGTH_REQUIREMENT = 1;

export default class extends Controller {
  static targets = [
    "userNameError",
    "userNameField",
    "passwordConfirmationError",
    "passwordConfirmationField",
    "passwordError",
    "passwordField"
  ]

  // Setup the controller
  connect() {
    this.persistedUsers = []
    this.formIsValid = false
  }

  // Actions
  submitForm(event) {
    event.preventDefault()
    event.stopPropagation()
    this.validateForm()
    if (this.formIsValid) {
      // For this exercise, it will serve well enough to
      // add the form data to an array `persistedUsers`
      // that is stored on the instance of the controller.
      // In a real world scenario we would probably make an
      // asychronous `POST` request to a server with ajax,
      // either with an `XMLHttpRequest`, the `fetch` API
      // or a library like Axios or jQuery.
      this.persistUser()
      this.element.reset()
      this.passwordConfirmationErrorTarget.innerText = ""
      alert("User was saved!")
    }
  }

  validatePasswordConfirmation() {
    if (this.password !== this.passwordConfirmation) {
      this.passwordConfirmationErrorTarget.innerText = "Passwords do not match"
      this.passwordConfirmationErrorTarget.classList.remove("text-green-500")
      this.passwordConfirmationErrorTarget.classList.add("text-red-500")
      return false
    } else {
      this.passwordConfirmationErrorTarget.innerText = "Passwords match!"
      this.passwordConfirmationErrorTarget.classList.remove("text-red-500")
      this.passwordConfirmationErrorTarget.classList.add("text-green-500")
      return true
    }
  }

  // Helpers
  validateForm() {
    this.formIsValid = true
    this.hideErrors()

    if (this.userName.length < USERNAME_LENGTH_REQUIREMENT) {
      this.userNameErrorTarget.removeAttribute("hidden")
      this.formIsValid = false
    }
    if (this.password.length < PASSWORD_LENGTH_REQUIREMENT) {
      this.passwordErrorTarget.removeAttribute("hidden")
      this.formIsValid = false
    } else {
      if (this.validatePasswordConfirmation() === false) {
	this.formIsValid = false
      }
    }
  }

  hideErrors() {
    this.userNameErrorTarget.setAttribute("hidden", true)
    this.passwordErrorTarget.setAttribute("hidden", true)
    this.passwordConfirmationErrorTarget.innerText = ""
  }

  persistUser() {
    const user = {
      userName: this.userName,
      password: this.password
    }

    this.persistedUsers.push(user)
  }

  // Getters
  get userName() {
    return this.userNameFieldTarget.value;
  }

  get password() {
    return this.passwordFieldTarget.value;
  }

  get passwordConfirmation() {
    return this.passwordConfirmationFieldTarget.value;
  }
}
