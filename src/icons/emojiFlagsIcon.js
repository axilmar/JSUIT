import { initIcon } from "./icon.js";

//the url of the emoji flags svg; resolved relative to this module
const URL_EMOJIFLAGS = new URL('../../assets/icons/emojiFlags.svg', import.meta.url).href;

/**
 * Initializes an icon element as an emoji flags icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/emojiFlags.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEmojiFlagsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'emojiFlagsIcon', url: URL_EMOJIFLAGS }, ...properties);
}

/**
 * Creates an emoji flags icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const emojiFlagsIcon = (...properties) => {
    const element = document.createElement('div');
    initEmojiFlagsIcon(element, ...properties);
    return element;
}
