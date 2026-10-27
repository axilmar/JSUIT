import { initIcon } from "./icon.js";

//the url of the local hospital outlined svg; resolved relative to this module
const URL_LOCALHOSPITALOUTLINED = new URL('../../assets/icons/localHospitalOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local hospital outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localHospitalOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalHospitalOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'localHospitalOutlinedIcon', url: URL_LOCALHOSPITALOUTLINED }, ...properties);
}

/**
 * Creates a local hospital outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localHospitalOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalHospitalOutlinedIcon(element, ...properties);
    return element;
}
