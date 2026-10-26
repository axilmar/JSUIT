import { initIcon } from "./icon.js";

//the url of the cameraswitch outlined svg; resolved relative to this module
const URL_CAMERASWITCHOUTLINED = new URL('../../assets/icons/cameraswitchOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a cameraswitch outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cameraswitchOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCameraswitchOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CAMERASWITCHOUTLINED }, ...properties);
}

/**
 * Creates a cameraswitch outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cameraswitchOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCameraswitchOutlinedIcon(element, ...properties);
    return element;
}
