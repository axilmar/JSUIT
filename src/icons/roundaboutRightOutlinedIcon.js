import { initIcon } from "./icon.js";

//the url of the roundabout right outlined svg; resolved relative to this module
const URL_ROUNDABOUTRIGHTOUTLINED = new URL('../../assets/icons/roundaboutRightOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a roundabout right outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/roundaboutRightOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRoundaboutRightOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ROUNDABOUTRIGHTOUTLINED }, ...properties);
}

/**
 * Creates a roundabout right outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const roundaboutRightOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRoundaboutRightOutlinedIcon(element, ...properties);
    return element;
}
