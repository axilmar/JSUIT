import { initIcon } from "./icon.js";

//the url of the devices other svg; resolved relative to this module
const URL_DEVICESOTHER = new URL('../../assets/icons/devicesOther.svg', import.meta.url).href;

/**
 * Initializes an icon element as a devices other icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/devicesOther.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDevicesOtherIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DEVICESOTHER }, ...properties);
}

/**
 * Creates a devices other icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const devicesOtherIcon = (...properties) => {
    const element = document.createElement('div');
    initDevicesOtherIcon(element, ...properties);
    return element;
}
