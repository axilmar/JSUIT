import { initIcon } from "./icon.js";

//the url of the emoji transportation outlined svg; resolved relative to this module
const URL_EMOJITRANSPORTATIONOUTLINED = new URL('../../assets/icons/emojiTransportationOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an emoji transportation outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/emojiTransportationOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEmojiTransportationOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_EMOJITRANSPORTATIONOUTLINED }, ...properties);
}

/**
 * Creates an emoji transportation outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const emojiTransportationOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initEmojiTransportationOutlinedIcon(element, ...properties);
    return element;
}
