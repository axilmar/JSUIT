import { initIcon } from "./icon.js";

//the url of the rocket outlined svg; resolved relative to this module
const URL_ROCKETOUTLINED = new URL('../../assets/icons/rocketOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a rocket outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/rocketOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRocketOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ROCKETOUTLINED }, ...properties);
}

/**
 * Creates a rocket outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const rocketOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRocketOutlinedIcon(element, ...properties);
    return element;
}
