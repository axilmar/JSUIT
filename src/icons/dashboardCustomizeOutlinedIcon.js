import { initIcon } from "./icon.js";

//the url of the dashboard customize outlined svg; resolved relative to this module
const URL_DASHBOARDCUSTOMIZEOUTLINED = new URL('../../assets/icons/dashboardCustomizeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a dashboard customize outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/dashboardCustomizeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initDashboardCustomizeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_DASHBOARDCUSTOMIZEOUTLINED }, ...properties);
}

/**
 * Creates a dashboard customize outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const dashboardCustomizeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initDashboardCustomizeOutlinedIcon(element, ...properties);
    return element;
}
