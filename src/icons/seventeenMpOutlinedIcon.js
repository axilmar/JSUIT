import { initIcon } from "./icon.js";

//the url of the seventeen mp outlined svg; resolved relative to this module
const URL_SEVENTEENMPOUTLINED = new URL('../../assets/icons/seventeenMpOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a seventeen mp outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/seventeenMpOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSeventeenMpOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SEVENTEENMPOUTLINED }, ...properties);
}

/**
 * Creates a seventeen mp outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const seventeenMpOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSeventeenMpOutlinedIcon(element, ...properties);
    return element;
}
