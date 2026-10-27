import { initIcon } from "./icon.js";

//the url of the nat outlined svg; resolved relative to this module
const URL_NATOUTLINED = new URL('../../assets/icons/natOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a nat outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/natOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNatOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'natOutlinedIcon', url: URL_NATOUTLINED }, ...properties);
}

/**
 * Creates a nat outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const natOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNatOutlinedIcon(element, ...properties);
    return element;
}
