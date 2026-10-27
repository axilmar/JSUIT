import { initIcon } from "./icon.js";

//the url of the tablet outlined svg; resolved relative to this module
const URL_TABLETOUTLINED = new URL('../../assets/icons/tabletOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a tablet outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tabletOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTabletOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'tabletOutlinedIcon', url: URL_TABLETOUTLINED }, ...properties);
}

/**
 * Creates a tablet outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tabletOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTabletOutlinedIcon(element, ...properties);
    return element;
}
