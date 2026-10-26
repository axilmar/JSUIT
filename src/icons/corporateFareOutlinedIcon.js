import { initIcon } from "./icon.js";

//the url of the corporate fare outlined svg; resolved relative to this module
const URL_CORPORATEFAREOUTLINED = new URL('../../assets/icons/corporateFareOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a corporate fare outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/corporateFareOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCorporateFareOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CORPORATEFAREOUTLINED }, ...properties);
}

/**
 * Creates a corporate fare outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const corporateFareOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCorporateFareOutlinedIcon(element, ...properties);
    return element;
}
