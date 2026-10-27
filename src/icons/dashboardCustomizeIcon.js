import { initIcon } from "./icon.js";

//the url of the dashboard customize svg; resolved relative to this module
const URL_DASHBOARDCUSTOMIZE = new URL('../../assets/icons/dashboardCustomize.svg', import.meta.url).href;

/**
 * Initializes an icon element as a dashboard customize icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/dashboardCustomize.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDashboardCustomizeIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'dashboardCustomizeIcon', url: URL_DASHBOARDCUSTOMIZE }, ...properties);
}

/**
 * Creates a dashboard customize icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const dashboardCustomizeIcon = (...properties) => {
    const element = document.createElement('div');
    initDashboardCustomizeIcon(element, ...properties);
    return element;
}
