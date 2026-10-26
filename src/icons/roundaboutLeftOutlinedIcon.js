import { initIcon } from "./icon.js";

//the url of the roundabout left outlined svg; resolved relative to this module
const URL_ROUNDABOUTLEFTOUTLINED = new URL('../../assets/icons/roundaboutLeftOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a roundabout left outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/roundaboutLeftOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRoundaboutLeftOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ROUNDABOUTLEFTOUTLINED }, ...properties);
}

/**
 * Creates a roundabout left outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const roundaboutLeftOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRoundaboutLeftOutlinedIcon(element, ...properties);
    return element;
}
