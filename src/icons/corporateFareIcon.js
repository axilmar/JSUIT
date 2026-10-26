import { initIcon } from "./icon.js";

//the url of the corporate fare svg; resolved relative to this module
const URL_CORPORATEFARE = new URL('../../assets/icons/corporateFare.svg', import.meta.url).href;

/**
 * Initializes an icon element as a corporate fare icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/corporateFare.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCorporateFareIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CORPORATEFARE }, ...properties);
}

/**
 * Creates a corporate fare icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const corporateFareIcon = (...properties) => {
    const element = document.createElement('div');
    initCorporateFareIcon(element, ...properties);
    return element;
}
