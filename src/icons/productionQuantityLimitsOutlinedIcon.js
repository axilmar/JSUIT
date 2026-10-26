import { initIcon } from "./icon.js";

//the url of the production quantity limits outlined svg; resolved relative to this module
const URL_PRODUCTIONQUANTITYLIMITSOUTLINED = new URL('../../assets/icons/productionQuantityLimitsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a production quantity limits outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/productionQuantityLimitsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initProductionQuantityLimitsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_PRODUCTIONQUANTITYLIMITSOUTLINED }, ...properties);
}

/**
 * Creates a production quantity limits outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const productionQuantityLimitsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initProductionQuantityLimitsOutlinedIcon(element, ...properties);
    return element;
}
