import { initIcon } from "./icon.js";

//the url of the mode standby svg; resolved relative to this module
const URL_MODESTANDBY = new URL('../../assets/icons/modeStandby.svg', import.meta.url).href;

/**
 * Initializes an icon element as a mode standby icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/modeStandby.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initModeStandbyIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'modeStandbyIcon', url: URL_MODESTANDBY }, ...properties);
}

/**
 * Creates a mode standby icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const modeStandbyIcon = (...properties) => {
    const element = document.createElement('div');
    initModeStandbyIcon(element, ...properties);
    return element;
}
