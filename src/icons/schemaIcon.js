import { initIcon } from "./icon.js";

//the url of the schema svg; resolved relative to this module
const URL_SCHEMA = new URL('../../assets/icons/schema.svg', import.meta.url).href;

/**
 * Initializes an icon element as a schema icon.
 *
 * It invokes the function `initIcon(element, ...properties)`.
 *
 * The element displays the svg `assets/icons/schema.svg`; a `url` property overrides it.
 *
 * @param {*} element the element to initialize.
 * @param  {...any} properties the object's properties.
 */
export const initSchemaIcon = (element, ...properties) => {
    console.assert(element instanceof HTMLDivElement);
    initIcon(element, { additionalClassName: 'schemaIcon', url: URL_SCHEMA }, ...properties);
}

/**
 * Creates a schema icon.
 *
 * @param  {...any} properties the element's properties.
 *
 * @return the created element.
 */
export const schemaIcon = (...properties) => {
    const element = document.createElement('div');
    initSchemaIcon(element, ...properties);
    return element;
}
