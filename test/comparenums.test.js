// IMPORT MODULES under test here:
// import example from '../src/example.js';
import compareNumbers from '../app.js';
const test = QUnit.test;

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = 1;
    const correctNumber = 1;
    const expected = 0;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(guess, correctNumber);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = 15;
    const correctNumber = 1;
    const expected = 1;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(guess, correctNumber);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = 15;
    const correctNumber = 20;
    const expected = -1;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(guess, correctNumber);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});