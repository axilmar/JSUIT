import { initIcon } from "./icon.js";

//the url of the emoji events svg; resolved relative to this module
const URL_EMOJIEVENTS = new URL('../../assets/icons/emojiEvents.svg', import.meta.url).href;

/**
 * Initializes an icon element as an emoji events icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/emojiEvents.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEmojiEventsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EMOJIEVENTS }, ...properties);
}

/**
 * Creates an emoji events icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const emojiEventsIcon = (...properties) => {
    const element = document.createElement('div');
    initEmojiEventsIcon(element, ...properties);
    return element;
}
