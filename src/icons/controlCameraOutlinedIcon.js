import { initIcon } from "./icon.js";

//the url of the control camera outlined svg; resolved relative to this module
const URL_CONTROLCAMERAOUTLINED = new URL('../../assets/icons/controlCameraOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a control camera outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/controlCameraOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initControlCameraOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CONTROLCAMERAOUTLINED }, ...properties);
}

/**
 * Creates a control camera outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const controlCameraOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initControlCameraOutlinedIcon(element, ...properties);
    return element;
}
