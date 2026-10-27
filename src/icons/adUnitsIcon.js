import { initIcon } from "./icon.js";

//the url of the ad units svg; resolved relative to this module
const URL_ADUNITS = new URL('../../assets/icons/adUnits.svg', import.meta.url).href;

/**
 * Initializes an icon element as an ad units icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/adUnits.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAdUnitsIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'adUnitsIcon', url: URL_ADUNITS }, ...properties);
}

/**
 * Creates an ad units icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const adUnitsIcon = (...properties) => {
    const element = document.createElement('div');
    initAdUnitsIcon(element, ...properties);
    return element;
}
