import { initIcon } from "./icon.js";

//the url of the donut large outlined svg; resolved relative to this module
const URL_DONUTLARGEOUTLINED = new URL('../../assets/icons/donutLargeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a donut large outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/donutLargeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDonutLargeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DONUTLARGEOUTLINED }, ...properties);
}

/**
 * Creates a donut large outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const donutLargeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDonutLargeOutlinedIcon(element, ...properties);
    return element;
}
