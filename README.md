# Signup Form Prototype

This prototype was built as a technical assessment for a front-end software developer role.

## Requirements

1. Create a form with 3 input fields, for the username, password and confirm password respectively

2. Persist the state of the input fields entries

3. The password and confirm password input field should validate their entries by comparing both values

4. Output to the user when both field match or dont match

5. Bonus would be to style the form

## Decisions

The instructions requested to do the exercise in either React or Vanilla Javascript. I chose to use the Stimulus JS library for this exercise and started this repository from the [stimulus-starter](https://github.com/stimulusjs/stimulus-starter).

While not _strictly_ Vanilla Javascript, Stimulus allowed me to build this prototype faster than sticking to strict VanillaJS and allowed me to organize my code slightly better. While it is really much more than what I've done with it here, Stimulus is extremely lightweight.

The following data-attribute... 
```html
<div data-target="foo.bar"></div>

```
is just syntactic sugar for...
```js
class FooController {
  constructor() {
    this.barTarget = document.querySelector("[data-target='foo.bar'"]
  }
}
```

Likewise...
```html
<button data-action="foo#bar"></div>

```
translates to...
```js
class FooController {
  constructor() {
    const el = document.querySelector("[data-action='foo#bar']"]
	el.addEventListener("click", this.bar)
  }
  
  bar() {
	console.log("hello world")
  }
}
```

While this is a drastic over simplification of Stimulus, it will serve well enough for the purposes of this exercise. For the curious, the full documentation can be found [here](https://stimulusjs.org/).

## Running locally

```
$ git clone https://github.com/benreyn/signup-form-prototype.git
$ cd signup-form-prototype
$ yarn install
$ yarn start
```
