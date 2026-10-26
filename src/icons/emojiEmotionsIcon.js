import { initIcon } from "./icon.js";

//the url of the emoji emotions svg; resolved relative to this module
const URL_EMOJIEMOTIONS = new URL('../../assets/icons/emojiEmotions.svg', import.meta.url).href;

/**
 * Initializes an icon element as an emoji emotions icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/emojiEmotions.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEmojiEmotionsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EMOJIEMOTIONS }, ...properties);
}

/**
 * Creates an emoji emotions icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const emojiEmotionsIcon = (...properties) => {
    const element = document.createElement('div');
    initEmojiEmotionsIcon(element, ...properties);
    return element;
}
