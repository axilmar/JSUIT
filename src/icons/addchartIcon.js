import { initIcon } from "./icon.js";

//the url of the addchart svg; resolved relative to this module
const URL_ADDCHART = new URL('../../assets/icons/addchart.svg', import.meta.url).href;

/**
 * Initializes an icon element as an addchart icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/addchart.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAddchartIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ADDCHART }, ...properties);
}

/**
 * Creates an addchart icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const addchartIcon = (...properties) => {
    const element = document.createElement('div');
    initAddchartIcon(element, ...properties);
    return element;
}
