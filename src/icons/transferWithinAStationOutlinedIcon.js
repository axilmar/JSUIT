import { initIcon } from "./icon.js";

//the url of the transfer within a station outlined svg; resolved relative to this module
const URL_TRANSFERWITHINASTATIONOUTLINED = new URL('../../assets/icons/transferWithinAStationOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a transfer within a station outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/transferWithinAStationOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTransferWithinAStationOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'transferWithinAStationOutlinedIcon', url: URL_TRANSFERWITHINASTATIONOUTLINED }, ...properties);
}

/**
 * Creates a transfer within a station outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const transferWithinAStationOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTransferWithinAStationOutlinedIcon(element, ...properties);
    return element;
}
