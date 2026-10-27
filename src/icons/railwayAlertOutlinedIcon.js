import { initIcon } from "./icon.js";

//the url of the railway alert outlined svg; resolved relative to this module
const URL_RAILWAYALERTOUTLINED = new URL('../../assets/icons/railwayAlertOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a railway alert outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/railwayAlertOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initRailwayAlertOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'railwayAlertOutlinedIcon', url: URL_RAILWAYALERTOUTLINED }, ...properties);
}

/**
 * Creates a railway alert outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const railwayAlertOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initRailwayAlertOutlinedIcon(element, ...properties);
    return element;
}
