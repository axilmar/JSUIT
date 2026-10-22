/**
 * Error that is thrown when a mask of a masked input is not valid (see `initMaskedInput` in maskedInput.js): the mask is not an array, an
 * entry is not valid, the pattern of an entry is not supported, or the length of the label of an entry is not the length of its pattern.
 */
export class MaskError extends Error {
    /**
     * Creates the error.
     *
     * @param {string} message the message.
     * @param {ErrorOptions} [options] the optional options, as in the Error constructor (for example the `cause`).
     */
    constructor(message, options) {
        super(message, options);
        this.name = 'MaskError';
    }
}
