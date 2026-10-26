import { initIcon } from "./icon.js";

//the url of the local gas station outlined svg; resolved relative to this module
const URL_LOCALGASSTATIONOUTLINED = new URL('../../assets/icons/localGasStationOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a local gas station outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/localGasStationOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initLocalGasStationOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_LOCALGASSTATIONOUTLINED }, ...properties);
}

/**
 * Creates a local gas station outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const localGasStationOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initLocalGasStationOutlinedIcon(element, ...properties);
    return element;
}
