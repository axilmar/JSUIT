import { initIcon } from "./icon.js";

//the url of the laptop windows outlined svg; resolved relative to this module
const URL_LAPTOPWINDOWSOUTLINED = new URL('../../assets/icons/laptopWindowsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a laptop windows outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/laptopWindowsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLaptopWindowsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'laptopWindowsOutlinedIcon', url: URL_LAPTOPWINDOWSOUTLINED }, ...properties);
}

/**
 * Creates a laptop windows outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const laptopWindowsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLaptopWindowsOutlinedIcon(element, ...properties);
    return element;
}
