import { initIcon } from "./icon.js";

//the url of the g translate outlined svg; resolved relative to this module
const URL_GTRANSLATEOUTLINED = new URL('../../assets/icons/gTranslateOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a g translate outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/gTranslateOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGTranslateOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'gTranslateOutlinedIcon', url: URL_GTRANSLATEOUTLINED }, ...properties);
}

/**
 * Creates a g translate outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const gTranslateOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initGTranslateOutlinedIcon(element, ...properties);
    return element;
}
