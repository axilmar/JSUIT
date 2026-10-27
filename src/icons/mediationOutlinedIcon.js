import { initIcon } from "./icon.js";

//the url of the mediation outlined svg; resolved relative to this module
const URL_MEDIATIONOUTLINED = new URL('../../assets/icons/mediationOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mediation outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/mediationOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMediationOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'mediationOutlinedIcon', url: URL_MEDIATIONOUTLINED }, ...properties);
}

/**
 * Creates a mediation outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const mediationOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initMediationOutlinedIcon(element, ...properties);
    return element;
}
