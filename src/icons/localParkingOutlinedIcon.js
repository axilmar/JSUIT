import { initIcon } from "./icon.js";

//the url of the local parking outlined svg; resolved relative to this module
const URL_LOCALPARKINGOUTLINED = new URL('../../assets/icons/localParkingOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local parking outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localParkingOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalParkingOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'localParkingOutlinedIcon', url: URL_LOCALPARKINGOUTLINED }, ...properties);
}

/**
 * Creates a local parking outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localParkingOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalParkingOutlinedIcon(element, ...properties);
    return element;
}
