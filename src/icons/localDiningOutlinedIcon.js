import { initIcon } from "./icon.js";

//the url of the local dining outlined svg; resolved relative to this module
const URL_LOCALDININGOUTLINED = new URL('../../assets/icons/localDiningOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local dining outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localDiningOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalDiningOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'localDiningOutlinedIcon', url: URL_LOCALDININGOUTLINED }, ...properties);
}

/**
 * Creates a local dining outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localDiningOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalDiningOutlinedIcon(element, ...properties);
    return element;
}
