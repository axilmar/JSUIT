import { initIcon } from "./icon.js";

//the url of the escalator warning outlined svg; resolved relative to this module
const URL_ESCALATORWARNINGOUTLINED = new URL('../../assets/icons/escalatorWarningOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an escalator warning outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/escalatorWarningOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEscalatorWarningOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'escalatorWarningOutlinedIcon', url: URL_ESCALATORWARNINGOUTLINED }, ...properties);
}

/**
 * Creates an escalator warning outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const escalatorWarningOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initEscalatorWarningOutlinedIcon(element, ...properties);
    return element;
}
