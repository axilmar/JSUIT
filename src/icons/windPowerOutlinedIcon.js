import { initIcon } from "./icon.js";

//the url of the wind power outlined svg; resolved relative to this module
const URL_WINDPOWEROUTLINED = new URL('../../assets/icons/windPowerOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wind power outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/windPowerOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWindPowerOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'windPowerOutlinedIcon', url: URL_WINDPOWEROUTLINED }, ...properties);
}

/**
 * Creates a wind power outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const windPowerOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWindPowerOutlinedIcon(element, ...properties);
    return element;
}
