import { initIcon } from "./icon.js";

//the url of the monitor heart svg; resolved relative to this module
const URL_MONITORHEART = new URL('../../assets/icons/monitorHeart.svg', import.meta.url).href;

/**
 * Initializes an icon element as a monitor heart icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/monitorHeart.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initMonitorHeartIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'monitorHeartIcon', url: URL_MONITORHEART }, ...properties);
}

/**
 * Creates a monitor heart icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const monitorHeartIcon = (...properties) => {
    const element = document.createElement('div');
    initMonitorHeartIcon(element, ...properties);
    return element;
}
