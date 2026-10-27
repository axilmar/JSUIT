import { initIcon } from "./icon.js";

//the url of the credit score outlined svg; resolved relative to this module
const URL_CREDITSCOREOUTLINED = new URL('../../assets/icons/creditScoreOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a credit score outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/creditScoreOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCreditScoreOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'creditScoreOutlinedIcon', url: URL_CREDITSCOREOUTLINED }, ...properties);
}

/**
 * Creates a credit score outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const creditScoreOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCreditScoreOutlinedIcon(element, ...properties);
    return element;
}
