import { initIcon } from "./icon.js";

//the url of the view array outlined svg; resolved relative to this module
const URL_VIEWARRAYOUTLINED = new URL('../../assets/icons/viewArrayOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a view array outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/viewArrayOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initViewArrayOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'viewArrayOutlinedIcon', url: URL_VIEWARRAYOUTLINED }, ...properties);
}

/**
 * Creates a view array outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const viewArrayOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initViewArrayOutlinedIcon(element, ...properties);
    return element;
}
