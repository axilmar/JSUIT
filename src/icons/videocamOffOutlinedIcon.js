import { initIcon } from "./icon.js";

//the url of the videocam off outlined svg; resolved relative to this module
const URL_VIDEOCAMOFFOUTLINED = new URL('../../assets/icons/videocamOffOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a videocam off outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/videocamOffOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVideocamOffOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'videocamOffOutlinedIcon', url: URL_VIDEOCAMOFFOUTLINED }, ...properties);
}

/**
 * Creates a videocam off outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const videocamOffOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initVideocamOffOutlinedIcon(element, ...properties);
    return element;
}
