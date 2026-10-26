import { initIcon } from "./icon.js";

//the url of the bedroom baby svg; resolved relative to this module
const URL_BEDROOMBABY = new URL('../../assets/icons/bedroomBaby.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bedroom baby icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bedroomBaby.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBedroomBabyIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_BEDROOMBABY }, ...properties);
}

/**
 * Creates a bedroom baby icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bedroomBabyIcon = (...properties) => {
    const element = document.createElement('div');
    initBedroomBabyIcon(element, ...properties);
    return element;
}
