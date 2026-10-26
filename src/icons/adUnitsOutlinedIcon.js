import { initIcon } from "./icon.js";

//the url of the ad units outlined svg; resolved relative to this module
const URL_ADUNITSOUTLINED = new URL('../../assets/icons/adUnitsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an ad units outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/adUnitsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAdUnitsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ADUNITSOUTLINED }, ...properties);
}

/**
 * Creates an ad units outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const adUnitsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAdUnitsOutlinedIcon(element, ...properties);
    return element;
}
