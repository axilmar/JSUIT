import { initIcon } from "./icon.js";

//the url of the cell tower outlined svg; resolved relative to this module
const URL_CELLTOWEROUTLINED = new URL('../../assets/icons/cellTowerOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a cell tower outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cellTowerOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCellTowerOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CELLTOWEROUTLINED }, ...properties);
}

/**
 * Creates a cell tower outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cellTowerOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCellTowerOutlinedIcon(element, ...properties);
    return element;
}
