import { initIcon } from "./icon.js";

//the url of the burst mode outlined svg; resolved relative to this module
const URL_BURSTMODEOUTLINED = new URL('../../assets/icons/burstModeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a burst mode outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/burstModeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBurstModeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'burstModeOutlinedIcon', url: URL_BURSTMODEOUTLINED }, ...properties);
}

/**
 * Creates a burst mode outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const burstModeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBurstModeOutlinedIcon(element, ...properties);
    return element;
}
