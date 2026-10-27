import { initIcon } from "./icon.js";

//the url of the bedroom child svg; resolved relative to this module
const URL_BEDROOMCHILD = new URL('../../assets/icons/bedroomChild.svg', import.meta.url).href;

/**
 * Initializes an icon element as a bedroom child icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/bedroomChild.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initBedroomChildIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'bedroomChildIcon', url: URL_BEDROOMCHILD }, ...properties);
}

/**
 * Creates a bedroom child icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const bedroomChildIcon = (...properties) => {
    const element = document.createElement('div');
    initBedroomChildIcon(element, ...properties);
    return element;
}
