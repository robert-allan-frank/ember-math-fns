ember-math-fns
==============================================================================
This addon provides math helpers for Ember templates and components.

To install:

```sh
ember install ember-math-fns
```

Usage
------------------------------------------------------------------------------
* [`math-abs`](#math-abs)
* [`math-add`](#math-add)
* [`math-ceil`](#math-ceil)
* [`math-divide`](#math-divide)
* [`math-floor`](#math-floor)
* [`math-max`](#math-max)
* [`math-min`](#math-min)
* [`math-multiply`](#math-multiply)
* [`math-pow`](#math-pow)
* [`math-random`](#math-random)
* [`math-round`](#math-round)
* [`math-sign`](#math-sign)
* [`math-subtract`](#math-subtract)

#### `math-abs`
Determines the absolute value of a number. See [Math.abs()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs) for details on the Math.abs function.

```hbs
{{math-abs -22}}
{{math-abs difference}}
```

#### `math-add`
Adds two or more numbers together.

```hbs
{{math-add 1 2}}
{{math-add 1 2 3 5 8 13 21}}
{{math-add total tax}}
```

#### `math-ceil`
Rounds a number up to the nearest integer. See [Math.ceil()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil) for details on the Math.ceil function.

```hbs
{{math-ceil 3.24}}
{{math-ceil giving}}
```

#### `math-divide`
Divides two or more numbers from left to right.

```hbs
{{math-divide 20 5}}
{{math-divide 100 10 5}}
{{math-divide paycheck wives}}
```

#### `math-floor`
Rounds a numbe down to the nearest integer. See [Math.fllor()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fllor) for details on the Math.fllor function.

```hbs
{{math-floor 4.54}}
{{math-floor tax}}
```

#### `math-max`
Determines the largest of two or more numbers. See [Math.max()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max) for details on the Math.max function.

```hbs
{{math-max 17 22}}
{{math-max 4 3 29 4}}
{{math-max paycheck federalTaxes stateTaxes}}
```

#### `math-min`
Determines the smallest of two or more numbers. See [Math.min()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min) for details on the Math.min function.

```hbs
{{math-min -22 8}}
{{math-min 14 23 11}}
{{math-min numberOfJiras timeInDay}}
```

#### `math-multiply`
Multiplies two or more numbers together.

```hbs
{{math-multiply 4 5}}
{{math-multiply 11 10 2}}
{{math-multiply children costOfCollege}}
```

#### `math-pow`
Returns the result of a number to the power of the other. See [Math.pow()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow) for details on the Math.pow function.

```hbs
{{math-pow 3 4}}
{{math-pow bugs numberOfCustomers}}
```

#### `math-random`
Returns a random decimal number between 0 and 1. See [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) for details on the Math.random function.

```hbs
{{math-random}}
```

#### `math-round`
Round a number to the nearest integer. See [Math.round()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round) for details on the Math.round function.

```hbs
{{math-round 14.5}}
{{math-round difference}}
```

#### `math-sign`
Return a -1 for a negative number and positive 1 for positive numbers. See [Math.sign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign) for details on the Math.sign function.

```hbs
{{math-sign -19}}
{{math-sign difference}}
```

#### `math-subtract`
Subtract two or more numbers from left to right.

```hbs
{{math-subtract 3 2}}
{{math-subtract 100 10 9}}
{{math-subtract paycheck rent}}
```

Compatibility
------------------------------------------------------------------------------
* Ember.js v3.4 or above
* Ember CLI v2.13 or above
* Node.js v8 or above


Contributing
------------------------------------------------------------------------------
See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------
This project is licensed under the [MIT License](LICENSE.md).
