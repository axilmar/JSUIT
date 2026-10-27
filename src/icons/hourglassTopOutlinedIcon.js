import { initIcon } from "./icon.js";

//the url of the hourglass top outlined svg; resolved relative to this module
const URL_HOURGLASSTOPOUTLINED = new URL('../../assets/icons/hourglassTopOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a hourglass top outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/hourglassTopOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initHourglassTopOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'hourglassTopOutlinedIcon', url: URL_HOURGLASSTOPOUTLINED }, ...properties);
}

/**
 * Creates a hourglass top outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const hourglassTopOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initHourglassTopOutlinedIcon(element, ...properties);
    return element;
}
