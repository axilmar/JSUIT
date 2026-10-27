import { initIcon } from "./icon.js";

//the url of the wrong location outlined svg; resolved relative to this module
const URL_WRONGLOCATIONOUTLINED = new URL('../../assets/icons/wrongLocationOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a wrong location outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/wrongLocationOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initWrongLocationOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'wrongLocationOutlinedIcon', url: URL_WRONGLOCATIONOUTLINED }, ...properties);
}

/**
 * Creates a wrong location outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const wrongLocationOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initWrongLocationOutlinedIcon(element, ...properties);
    return element;
}
