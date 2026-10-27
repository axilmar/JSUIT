import { initIcon } from "./icon.js";

//the url of the cameraswitch svg; resolved relative to this module
const URL_CAMERASWITCH = new URL('../../assets/icons/cameraswitch.svg', import.meta.url).href;

/**
 * Initializes an icon element as a cameraswitch icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cameraswitch.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCameraswitchIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'cameraswitchIcon', url: URL_CAMERASWITCH }, ...properties);
}

/**
 * Creates a cameraswitch icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cameraswitchIcon = (...properties) => {
    const element = document.createElement('div');
    initCameraswitchIcon(element, ...properties);
    return element;
}
