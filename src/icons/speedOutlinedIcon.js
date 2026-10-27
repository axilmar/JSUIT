import { initIcon } from "./icon.js";

//the url of the speed outlined svg; resolved relative to this module
const URL_SPEEDOUTLINED = new URL('../../assets/icons/speedOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a speed outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/speedOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSpeedOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'speedOutlinedIcon', url: URL_SPEEDOUTLINED }, ...properties);
}

/**
 * Creates a speed outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const speedOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSpeedOutlinedIcon(element, ...properties);
    return element;
}
