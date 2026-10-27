import { initIcon } from "./icon.js";

//the url of the umbrella outlined svg; resolved relative to this module
const URL_UMBRELLAOUTLINED = new URL('../../assets/icons/umbrellaOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an umbrella outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/umbrellaOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initUmbrellaOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'umbrellaOutlinedIcon', url: URL_UMBRELLAOUTLINED }, ...properties);
}

/**
 * Creates an umbrella outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const umbrellaOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initUmbrellaOutlinedIcon(element, ...properties);
    return element;
}
