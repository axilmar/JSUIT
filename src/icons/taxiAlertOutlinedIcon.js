import { initIcon } from "./icon.js";

//the url of the taxi alert outlined svg; resolved relative to this module
const URL_TAXIALERTOUTLINED = new URL('../../assets/icons/taxiAlertOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a taxi alert outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/taxiAlertOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTaxiAlertOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'taxiAlertOutlinedIcon', url: URL_TAXIALERTOUTLINED }, ...properties);
}

/**
 * Creates a taxi alert outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const taxiAlertOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTaxiAlertOutlinedIcon(element, ...properties);
    return element;
}
