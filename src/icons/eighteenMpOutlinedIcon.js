import { initIcon } from "./icon.js";

//the url of the eighteen mp outlined svg; resolved relative to this module
const URL_EIGHTEENMPOUTLINED = new URL('../../assets/icons/eighteenMpOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as an eighteen mp outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/eighteenMpOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initEighteenMpOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'eighteenMpOutlinedIcon', url: URL_EIGHTEENMPOUTLINED }, ...properties);
}

/**
 * Creates an eighteen mp outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const eighteenMpOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initEighteenMpOutlinedIcon(element, ...properties);
    return element;
}
