import { initIcon } from "./icon.js";

//the url of the bedroom child outlined svg; resolved relative to this module
const URL_BEDROOMCHILDOUTLINED = new URL('../../assets/icons/bedroomChildOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bedroom child outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bedroomChildOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBedroomChildOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'bedroomChildOutlinedIcon', url: URL_BEDROOMCHILDOUTLINED }, ...properties);
}

/**
 * Creates a bedroom child outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bedroomChildOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initBedroomChildOutlinedIcon(element, ...properties);
    return element;
}
