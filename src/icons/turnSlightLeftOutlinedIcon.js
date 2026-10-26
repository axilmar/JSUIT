import { initIcon } from "./icon.js";

//the url of the turn slight left outlined svg; resolved relative to this module
const URL_TURNSLIGHTLEFTOUTLINED = new URL('../../assets/icons/turnSlightLeftOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a turn slight left outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/turnSlightLeftOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initTurnSlightLeftOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { url: URL_TURNSLIGHTLEFTOUTLINED }, ...properties);
}

/**
 * Creates a turn slight left outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const turnSlightLeftOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initTurnSlightLeftOutlinedIcon(element, ...properties);
    return element;
}
