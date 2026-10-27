import { initIcon } from "./icon.js";

//the url of the four mp outlined svg; resolved relative to this module
const URL_FOURMPOUTLINED = new URL('../../assets/icons/fourMpOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a four mp outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fourMpOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFourMpOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'fourMpOutlinedIcon', url: URL_FOURMPOUTLINED }, ...properties);
}

/**
 * Creates a four mp outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fourMpOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFourMpOutlinedIcon(element, ...properties);
    return element;
}
