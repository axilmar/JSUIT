import { initIcon } from "./icon.js";

//the url of the straighten outlined svg; resolved relative to this module
const URL_STRAIGHTENOUTLINED = new URL('../../assets/icons/straightenOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a straighten outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/straightenOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initStraightenOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'straightenOutlinedIcon', url: URL_STRAIGHTENOUTLINED }, ...properties);
}

/**
 * Creates a straighten outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const straightenOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initStraightenOutlinedIcon(element, ...properties);
    return element;
}
