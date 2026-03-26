import { initObject } from "./Object.js";
import { isInstanceOfEventTarget } from "./util.js";

/**
 * Initializes an event target object.
 * 
 * It initializes the object by invoking `initObject(eventTarget, props)`.
 * 
 * @param {*} eventTarget the event target object to initialize.
 * @param {*} props the properties object.
 * 
 * @returns the event target object.
 */
export const initEventTarget = (eventTarget, props) => {
    console.assert(isInstanceOfEventTarget(eventTarget));
    return initObject(eventTarget, props);
}
