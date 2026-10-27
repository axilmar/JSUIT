import { initIcon } from "./icon.js";

//the url of the vaping rooms outlined svg; resolved relative to this module
const URL_VAPINGROOMSOUTLINED = new URL('../../assets/icons/vapingRoomsOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a vaping rooms outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/vapingRoomsOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initVapingRoomsOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'vapingRoomsOutlinedIcon', url: URL_VAPINGROOMSOUTLINED }, ...properties);
}

/**
 * Creates a vaping rooms outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const vapingRoomsOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initVapingRoomsOutlinedIcon(element, ...properties);
    return element;
}
