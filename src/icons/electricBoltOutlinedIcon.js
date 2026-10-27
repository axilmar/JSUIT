import { initIcon } from "./icon.js";

//the url of the electric bolt outlined svg; resolved relative to this module
const URL_ELECTRICBOLTOUTLINED = new URL('../../assets/icons/electricBoltOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an electric bolt outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/electricBoltOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initElectricBoltOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'electricBoltOutlinedIcon', url: URL_ELECTRICBOLTOUTLINED }, ...properties);
}

/**
 * Creates an electric bolt outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const electricBoltOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initElectricBoltOutlinedIcon(element, ...properties);
    return element;
}
