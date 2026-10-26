import { initIcon } from "./icon.js";

//the url of the cell tower svg; resolved relative to this module
const URL_CELLTOWER = new URL('../../assets/icons/cellTower.svg', import.meta.url).href;

/**
 * Initializes an icon element as a cell tower icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/cellTower.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCellTowerIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_CELLTOWER }, ...properties);
}

/**
 * Creates a cell tower icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const cellTowerIcon = (...properties) => {
    const element = document.createElement('div');
    initCellTowerIcon(element, ...properties);
    return element;
}
