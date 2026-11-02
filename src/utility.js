/******************************************************************************
    PUBLIC
 ******************************************************************************/

/**
 * Asserts that a condition is true.
 * If the condition is false, the message is logged to the console and an error is thrown.
 *
 * @param {*} condition the condition to check.
 * @param {string} message the message of the error.
 * @throws {Error} if the condition is false.
 */
export const assert = (condition, message) => {
    if (!condition) {
        console.error(message);
        throw new Error(message);
    }
}

/**
 * Checks if a value is a function.
 *
 * @param {*} value the value to check.
 * @returns {boolean} true if the value is a function, false otherwise.
 */
export const isFunction = (value) => {
    return typeof value === 'function';
}
