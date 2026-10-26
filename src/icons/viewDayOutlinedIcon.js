import { initIcon } from "./icon.js";

//the url of the view day outlined svg; resolved relative to this module
const URL_VIEWDAYOUTLINED = new URL('../../assets/icons/viewDayOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a view day outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/viewDayOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initViewDayOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_VIEWDAYOUTLINED }, ...properties);
}

/**
 * Creates a view day outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const viewDayOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initViewDayOutlinedIcon(element, ...properties);
    return element;
}
