import { initIcon } from "./icon.js";

//the url of the supervisor account outlined svg; resolved relative to this module
const URL_SUPERVISORACCOUNTOUTLINED = new URL('../../assets/icons/supervisorAccountOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a supervisor account outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/supervisorAccountOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSupervisorAccountOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'supervisorAccountOutlinedIcon', url: URL_SUPERVISORACCOUNTOUTLINED }, ...properties);
}

/**
 * Creates a supervisor account outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const supervisorAccountOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSupervisorAccountOutlinedIcon(element, ...properties);
    return element;
}
