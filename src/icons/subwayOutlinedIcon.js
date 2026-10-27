import { initIcon } from "./icon.js";

//the url of the subway outlined svg; resolved relative to this module
const URL_SUBWAYOUTLINED = new URL('../../assets/icons/subwayOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a subway outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/subwayOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSubwayOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'subwayOutlinedIcon', url: URL_SUBWAYOUTLINED }, ...properties);
}

/**
 * Creates a subway outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const subwayOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSubwayOutlinedIcon(element, ...properties);
    return element;
}
