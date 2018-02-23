
# Basic Javascript Testing #MoreThanCoding #HackReactor

## Hi! I'm Mohammed Zaghloul,

## In this tutorial I will show you how to do basic Javascript testing.

#### In the past, I used to manually test my web applications on the browser, but as my projects grow bigger this process become a big time consuming. I also used to add `console.log` statements all over the code to see if it's working as expected, unfortunately by doing that I may end up forgetting one of these statements in my code.

#### Recently, I started implementing basic tests to validate expected output against actual output.

#### Usually, I follow one of the following options to do that based on allowed time frame.
- Option 1: Is to add a simple `console.log` statement, that print true or false to the console after evaluating passed boolean expression.

  - We can enhance this option by using `console.assert` statement that takes a boolean expression as a first parameter, and an error message as a second parameter, and it print's the error message to the console if the assert boolean expression evaluated to false.

- Option 2: Is to implement a simple assert function based on expected output type, and use it to assert that expected and actual outputs are matched.

  - We can enhance this option by wrapping our assertion code in a separate function for each individual test, which will be more organized.

- Option 3: Is to use a testing framework like `Mocha` and an assertion function like `Chai` 

 





