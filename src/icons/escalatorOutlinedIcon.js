import { initIcon } from "./icon.js";

//the url of the escalator outlined svg; resolved relative to this module
const URL_ESCALATOROUTLINED = new URL('../../assets/icons/escalatorOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an escalator outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/escalatorOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEscalatorOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'escalatorOutlinedIcon', url: URL_ESCALATOROUTLINED }, ...properties);
}

/**
 * Creates an escalator outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const escalatorOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initEscalatorOutlinedIcon(element, ...properties);
    return element;
}
