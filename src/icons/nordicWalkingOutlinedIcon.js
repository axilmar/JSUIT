import { initIcon } from "./icon.js";

//the url of the nordic walking outlined svg; resolved relative to this module
const URL_NORDICWALKINGOUTLINED = new URL('../../assets/icons/nordicWalkingOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a nordic walking outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/nordicWalkingOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNordicWalkingOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'nordicWalkingOutlinedIcon', url: URL_NORDICWALKINGOUTLINED }, ...properties);
}

/**
 * Creates a nordic walking outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const nordicWalkingOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNordicWalkingOutlinedIcon(element, ...properties);
    return element;
}
