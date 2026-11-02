/******************************************************************************
    PUBLIC
 ******************************************************************************/

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
