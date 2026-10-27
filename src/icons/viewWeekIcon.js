import { initIcon } from "./icon.js";

//the url of the view week svg; resolved relative to this module
const URL_VIEWWEEK = new URL('../../assets/icons/viewWeek.svg', import.meta.url).href;

/**
 * Initializes an icon element as a view week icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/viewWeek.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initViewWeekIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'viewWeekIcon', url: URL_VIEWWEEK }, ...properties);
}

/**
 * Creates a view week icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const viewWeekIcon = (...properties) => {
    const element = document.createElement('div');
    initViewWeekIcon(element, ...properties);
    return element;
}
