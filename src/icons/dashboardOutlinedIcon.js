import { initIcon } from "./icon.js";

//the url of the dashboard outlined svg; resolved relative to this module
const URL_DASHBOARDOUTLINED = new URL('../../assets/icons/dashboardOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a dashboard outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/dashboardOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDashboardOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'dashboardOutlinedIcon', url: URL_DASHBOARDOUTLINED }, ...properties);
}

/**
 * Creates a dashboard outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const dashboardOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDashboardOutlinedIcon(element, ...properties);
    return element;
}
