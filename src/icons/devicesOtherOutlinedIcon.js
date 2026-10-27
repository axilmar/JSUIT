import { initIcon } from "./icon.js";

//the url of the devices other outlined svg; resolved relative to this module
const URL_DEVICESOTHEROUTLINED = new URL('../../assets/icons/devicesOtherOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a devices other outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/devicesOtherOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDevicesOtherOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'devicesOtherOutlinedIcon', url: URL_DEVICESOTHEROUTLINED }, ...properties);
}

/**
 * Creates a devices other outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const devicesOtherOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDevicesOtherOutlinedIcon(element, ...properties);
    return element;
}
