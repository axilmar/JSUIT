import { initIcon } from "./icon.js";

//the url of the emoji objects outlined svg; resolved relative to this module
const URL_EMOJIOBJECTSOUTLINED = new URL('../../assets/icons/emojiObjectsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an emoji objects outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/emojiObjectsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEmojiObjectsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'emojiObjectsOutlinedIcon', url: URL_EMOJIOBJECTSOUTLINED }, ...properties);
}

/**
 * Creates an emoji objects outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const emojiObjectsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initEmojiObjectsOutlinedIcon(element, ...properties);
    return element;
}
