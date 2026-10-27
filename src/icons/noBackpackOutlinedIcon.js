import { initIcon } from "./icon.js";

//the url of the no backpack outlined svg; resolved relative to this module
const URL_NOBACKPACKOUTLINED = new URL('../../assets/icons/noBackpackOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a no backpack outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/noBackpackOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNoBackpackOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'noBackpackOutlinedIcon', url: URL_NOBACKPACKOUTLINED }, ...properties);
}

/**
 * Creates a no backpack outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const noBackpackOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initNoBackpackOutlinedIcon(element, ...properties);
    return element;
}
