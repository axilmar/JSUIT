import { initIcon } from "./icon.js";

//the url of the signal cellular nodata outlined svg; resolved relative to this module
const URL_SIGNALCELLULARNODATAOUTLINED = new URL('../../assets/icons/signalCellularNodataOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a signal cellular nodata outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/signalCellularNodataOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSignalCellularNodataOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_SIGNALCELLULARNODATAOUTLINED }, ...properties);
}

/**
 * Creates a signal cellular nodata outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const signalCellularNodataOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSignalCellularNodataOutlinedIcon(element, ...properties);
    return element;
}
