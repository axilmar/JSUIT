import { initIcon } from "./icon.js";

//the url of the schema outlined svg; resolved relative to this module
const URL_SCHEMAOUTLINED = new URL('../../assets/icons/schemaOutlined.svg', import.meta.url).href;

/**
 * Initializes an icon element as a schema outlined icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/schemaOutlined.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSchemaOutlinedIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'schemaOutlinedIcon', url: URL_SCHEMAOUTLINED }, ...properties);
}

/**
 * Creates a schema outlined icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const schemaOutlinedIcon = (...properties) => {
    const element = document.createElement('div');
    initSchemaOutlinedIcon(element, ...properties);
    return element;
}
