import { initObject } from "./Object.js";
import { isInstanceOfEventTarget } from "./util.js";

const addEventHandler = (eventTarget, props, propName, eventName, propsToRemove) => {
    if (eventName.length > 0) {
        const eventHandler = props[propName];
        if (eventHandler && typeof eventHandler === 'function') {
            eventTarget.addEventListener(eventName, eventHandler);
            propsToRemove.push(propName);
        }
    }
}

const initEvents = (eventTarget, props) => {
    const propsToRemove = [];

    for(const propName in props) {
        if (propName.startsWith('on') && propName === propName.toLowerCase()) {
            addEventHandler(eventTarget, props, propName, propName.substring(2), propsToRemove);
        }
        else if (propName.endsWith('event') || propName.endsWith('Event')) {
            addEventHandler(eventTarget, props, propName, propName.substring(0, propName.length - 'event'.length), propsToRemove);
        }
    }

    if (propsToRemove.length > 0) {
        for(const propName of propsToRemove) {
            delete props[propName];
        }
    }

    return props;
}

/**
 * Initializes an event target object.
 * 
 * It initializes the object by invoking `initObject(eventTarget, props)`.
 * 
 * Properties that start with 'on' and are lowercase are treated as events: the 'on' prefix is removed
 * from the string, and an event handler is added with the remaining string as the event type.
 * 
 * Properties that end with 'event' or 'Event' are also treated as events: the 'event' suffix is removed
 * from the string, and an event handler is added with the remaining string as the event type.
 * 
 * @param {*} eventTarget the event target object to initialize.
 * @param {*} props the properties object.
 * 
 * @returns the event target object.
 */
export const initEventTarget = (eventTarget, props) => {
    console.assert(isInstanceOfEventTarget(eventTarget), 'instanceof EventTarget');
    props = initEvents(eventTarget, props);
    return initObject(eventTarget, props);
}
