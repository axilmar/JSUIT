import { initIcon } from "./icon.js";

//the url of the fourteen mp outlined svg; resolved relative to this module
const URL_FOURTEENMPOUTLINED = new URL('../../assets/icons/fourteenMpOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a fourteen mp outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/fourteenMpOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initFourteenMpOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'fourteenMpOutlinedIcon', url: URL_FOURTEENMPOUTLINED }, ...properties);
}

/**
 * Creates a fourteen mp outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const fourteenMpOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initFourteenMpOutlinedIcon(element, ...properties);
    return element;
}
