import { initIcon } from "./icon.js";

//the url of the mediation svg; resolved relative to this module
const URL_MEDIATION = new URL('../../assets/icons/mediation.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mediation icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/mediation.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMediationIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'mediationIcon', url: URL_MEDIATION }, ...properties);
}

/**
 * Creates a mediation icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const mediationIcon = (...properties) => {
    const element = document.createElement('div');
    initMediationIcon(element, ...properties);
    return element;
}
