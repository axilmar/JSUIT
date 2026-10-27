import { initIcon } from "./icon.js";

//the url of the emoji nature svg; resolved relative to this module
const URL_EMOJINATURE = new URL('../../assets/icons/emojiNature.svg', import.meta.url).href;

/**
 * Initializes an icon element as an emoji nature icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/emojiNature.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEmojiNatureIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'emojiNatureIcon', url: URL_EMOJINATURE }, ...properties);
}

/**
 * Creates an emoji nature icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const emojiNatureIcon = (...properties) => {
    const element = document.createElement('div');
    initEmojiNatureIcon(element, ...properties);
    return element;
}
