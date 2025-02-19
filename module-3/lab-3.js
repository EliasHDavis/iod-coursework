if (0) console.log('#1 zero is true') // Does not log because 0 is not a truthy value/equates to false
if ("0") console.log('#2 zero is true') // Prints because "0" is a string with value
if (null) console.log('null is true') // Does not print because null is an empty value and converts to false
if (-1) console.log('negative is true') // Prints because -1 is still a value, negative nubers are still truthy
if (1) console.log('positive is true') // Prints because possitive numbers are also truthy values