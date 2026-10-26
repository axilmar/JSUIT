import { initIcon } from "./icon.js";

//the url of the emoji people svg; resolved relative to this module
const URL_EMOJIPEOPLE = new URL('../../assets/icons/emojiPeople.svg', import.meta.url).href;

/**
 * Initializes an icon element as an emoji people icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/emojiPeople.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEmojiPeopleIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EMOJIPEOPLE }, ...properties);
}

/**
 * Creates an emoji people icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const emojiPeopleIcon = (...properties) => {
    const element = document.createElement('div');
    initEmojiPeopleIcon(element, ...properties);
    return element;
}
