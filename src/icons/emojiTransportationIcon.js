import { initIcon } from "./icon.js";

//the url of the emoji transportation svg; resolved relative to this module
const URL_EMOJITRANSPORTATION = new URL('../../assets/icons/emojiTransportation.svg', import.meta.url).href;

/**
 * Initializes an icon element as an emoji transportation icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/emojiTransportation.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEmojiTransportationIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EMOJITRANSPORTATION }, ...properties);
}

/**
 * Creates an emoji transportation icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const emojiTransportationIcon = (...properties) => {
    const element = document.createElement('div');
    initEmojiTransportationIcon(element, ...properties);
    return element;
}
