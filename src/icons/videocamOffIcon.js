import { initIcon } from "./icon.js";

//the url of the videocam off svg; resolved relative to this module
const URL_VIDEOCAMOFF = new URL('../../assets/icons/videocamOff.svg', import.meta.url).href;

/**
 * Initializes an icon element as a videocam off icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/videocamOff.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVideocamOffIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VIDEOCAMOFF }, ...properties);
}

/**
 * Creates a videocam off icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const videocamOffIcon = (...properties) => {
    const element = document.createElement('div');
    initVideocamOffIcon(element, ...properties);
    return element;
}
