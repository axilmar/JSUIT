import { initIcon } from "./icon.js";

//the url of the catching pokemon outlined svg; resolved relative to this module
const URL_CATCHINGPOKEMONOUTLINED = new URL('../../assets/icons/catchingPokemonOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a catching pokemon outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/catchingPokemonOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initCatchingPokemonOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'catchingPokemonOutlinedIcon', url: URL_CATCHINGPOKEMONOUTLINED }, ...properties);
}

/**
 * Creates a catching pokemon outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const catchingPokemonOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initCatchingPokemonOutlinedIcon(element, ...properties);
    return element;
}
