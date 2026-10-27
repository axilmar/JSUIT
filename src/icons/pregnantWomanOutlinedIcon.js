import { initIcon } from "./icon.js";

//the url of the pregnant woman outlined svg; resolved relative to this module
const URL_PREGNANTWOMANOUTLINED = new URL('../../assets/icons/pregnantWomanOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a pregnant woman outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/pregnantWomanOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPregnantWomanOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'pregnantWomanOutlinedIcon', url: URL_PREGNANTWOMANOUTLINED }, ...properties);
}

/**
 * Creates a pregnant woman outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const pregnantWomanOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPregnantWomanOutlinedIcon(element, ...properties);
    return element;
}
