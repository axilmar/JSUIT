import { initIcon } from "./icon.js";

//the url of the tablet mac svg; resolved relative to this module
const URL_TABLETMAC = new URL('../../assets/icons/tabletMac.svg', import.meta.url).href;

/**
 * Initializes an icon element as a tablet mac icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/tabletMac.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTabletMacIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TABLETMAC }, ...properties);
}

/**
 * Creates a tablet mac icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const tabletMacIcon = (...properties) => {
    const element = document.createElement('div');
    initTabletMacIcon(element, ...properties);
    return element;
}
