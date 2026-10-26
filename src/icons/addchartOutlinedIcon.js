import { initIcon } from "./icon.js";

//the url of the addchart outlined svg; resolved relative to this module
const URL_ADDCHARTOUTLINED = new URL('../../assets/icons/addchartOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an addchart outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/addchartOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initAddchartOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_ADDCHARTOUTLINED }, ...properties);
}

/**
 * Creates an addchart outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const addchartOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initAddchartOutlinedIcon(element, ...properties);
    return element;
}
