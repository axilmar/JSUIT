import { initIcon } from "./icon.js";

//the url of the party mode outlined svg; resolved relative to this module
const URL_PARTYMODEOUTLINED = new URL('../../assets/icons/partyModeOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a party mode outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/partyModeOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initPartyModeOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'partyModeOutlinedIcon', url: URL_PARTYMODEOUTLINED }, ...properties);
}

/**
 * Creates a party mode outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const partyModeOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initPartyModeOutlinedIcon(element, ...properties);
    return element;
}
