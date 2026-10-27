import { initIcon } from "./icon.js";

//the url of the near me disabled svg; resolved relative to this module
const URL_NEARMEDISABLED = new URL('../../assets/icons/nearMeDisabled.svg', import.meta.url).href;

/**
 * Initializes an icon element as a near me disabled icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/nearMeDisabled.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initNearMeDisabledIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'nearMeDisabledIcon', url: URL_NEARMEDISABLED }, ...properties);
}

/**
 * Creates a near me disabled icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const nearMeDisabledIcon = (...properties) => {
    const element = document.createElement('div');
    initNearMeDisabledIcon(element, ...properties);
    return element;
}
