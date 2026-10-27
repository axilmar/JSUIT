import { initIcon } from "./icon.js";

//the url of the ev station svg; resolved relative to this module
const URL_EVSTATION = new URL('../../assets/icons/evStation.svg', import.meta.url).href;

/**
 * Initializes an icon element as an ev station icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/evStation.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEvStationIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'evStationIcon', url: URL_EVSTATION }, ...properties);
}

/**
 * Creates an ev station icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const evStationIcon = (...properties) => {
    const element = document.createElement('div');
    initEvStationIcon(element, ...properties);
    return element;
}
