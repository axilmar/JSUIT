import { initIcon } from "./icon.js";

//the url of the grid goldenratio svg; resolved relative to this module
const URL_GRIDGOLDENRATIO = new URL('../../assets/icons/gridGoldenratio.svg', import.meta.url).href;

/**
 * Initializes an icon element as a grid goldenratio icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/gridGoldenratio.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initGridGoldenratioIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'gridGoldenratioIcon', url: URL_GRIDGOLDENRATIO }, ...properties);
}

/**
 * Creates a grid goldenratio icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const gridGoldenratioIcon = (...properties) => {
    const element = document.createElement('div');
    initGridGoldenratioIcon(element, ...properties);
    return element;
}
