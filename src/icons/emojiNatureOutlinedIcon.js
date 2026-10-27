import { initIcon } from "./icon.js";

//the url of the emoji nature outlined svg; resolved relative to this module
const URL_EMOJINATUREOUTLINED = new URL('../../assets/icons/emojiNatureOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an emoji nature outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/emojiNatureOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEmojiNatureOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'emojiNatureOutlinedIcon', url: URL_EMOJINATUREOUTLINED }, ...properties);
}

/**
 * Creates an emoji nature outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const emojiNatureOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initEmojiNatureOutlinedIcon(element, ...properties);
    return element;
}
