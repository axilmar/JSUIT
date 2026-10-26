import { initIcon } from "./icon.js";

//the url of the umbrella svg; resolved relative to this module
const URL_UMBRELLA = new URL('../../assets/icons/umbrella.svg', import.meta.url).href;

/**
 * Initializes an icon element as an umbrella icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/umbrella.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initUmbrellaIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_UMBRELLA }, ...properties);
}

/**
 * Creates an umbrella icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const umbrellaIcon = (...properties) => {
    const element = document.createElement('div');
    initUmbrellaIcon(element, ...properties);
    return element;
}
