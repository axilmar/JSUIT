import { initIcon } from "./icon.js";

//the url of the switch camera outlined svg; resolved relative to this module
const URL_SWITCHCAMERAOUTLINED = new URL('../../assets/icons/switchCameraOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a switch camera outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/switchCameraOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSwitchCameraOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'switchCameraOutlinedIcon', url: URL_SWITCHCAMERAOUTLINED }, ...properties);
}

/**
 * Creates a switch camera outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const switchCameraOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSwitchCameraOutlinedIcon(element, ...properties);
    return element;
}
