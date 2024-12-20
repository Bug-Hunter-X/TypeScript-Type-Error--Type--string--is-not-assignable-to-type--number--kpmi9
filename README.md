# TypeScript Type Error: Type 'string' is not assignable to type 'number'

This repository demonstrates a common TypeScript type error and its solution. The error occurs when a function expects a number but receives a string argument.  The example showcases how to handle this error using type guards and type assertions. 

## Bug Description

The `add` function is defined to accept two numbers and return their sum. However, in the example usage, a string ('10') is passed as an argument, resulting in a type error.

## Bug Solution

The solution involves using type checking (typeof operator) to ensure that the input is a number before performing the addition operation.  If not a number, a different action (such as returning an error or performing a type conversion) can be taken.