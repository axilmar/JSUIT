import { initIcon } from "./icon.js";

//the url of the local police outlined svg; resolved relative to this module
const URL_LOCALPOLICEOUTLINED = new URL('../../assets/icons/localPoliceOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local police outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localPoliceOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalPoliceOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'localPoliceOutlinedIcon', url: URL_LOCALPOLICEOUTLINED }, ...properties);
}

/**
 * Creates a local police outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localPoliceOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalPoliceOutlinedIcon(element, ...properties);
    return element;
}
