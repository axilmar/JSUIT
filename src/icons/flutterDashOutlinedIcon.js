import { initIcon } from "./icon.js";

//the url of the flutter dash outlined svg; resolved relative to this module
const URL_FLUTTERDASHOUTLINED = new URL('../../assets/icons/flutterDashOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a flutter dash outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/flutterDashOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFlutterDashOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_FLUTTERDASHOUTLINED }, ...properties);
}

/**
 * Creates a flutter dash outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const flutterDashOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFlutterDashOutlinedIcon(element, ...properties);
    return element;
}
