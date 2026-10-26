import { initIcon } from "./icon.js";

//the url of the credit score svg; resolved relative to this module
const URL_CREDITSCORE = new URL('../../assets/icons/creditScore.svg', import.meta.url).href;

/**
 * Initializes an icon element as a credit score icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/creditScore.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCreditScoreIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CREDITSCORE }, ...properties);
}

/**
 * Creates a credit score icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const creditScoreIcon = (...properties) => {
    const element = document.createElement('div');
    initCreditScoreIcon(element, ...properties);
    return element;
}
