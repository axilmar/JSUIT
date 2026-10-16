import './init.js';
import { isFunction, isObject, isTreeNode } from "./utility.js";

//sets an object's property
const setProperty = (object, propertyName, propertyValue) => {    
    object[propertyName] = propertyValue;
}

//sets the properties of an object from another object that contains properties
const setProperties = (targetObject, propertiesObject) => {
    for(const propertyName in propertiesObject) {
        const propertyValue = propertiesObject[propertyName];
        setProperty(targetObject, propertyName, propertyValue);
    }
}

/**
 * Initializes an object.
 * 
 * The array of given properties can contain:
 *  1. functions to use for initialization; the functions are passed the given object.
 *  2. descentants of DOM Node; added to the given object using the method `appendChild`.
 *  3. objects that have a method 'isTreeNode()' that returns true; added to the given object using the method 'appendChild' or 'append'.
 *  4. objects with properties to apply on the given object.
 *  5. values to be converted to a string and added as text in the parent element node.
 * 
 * @param {*} object the object to initialize.
 * @param  {...any} properties array of properties.
 * 
 * @throws Error an error is thrown in one of the following cases:
 * 
 *  1. a given property is not a function, a tree node, an object with properties, or a value to be converted to a string while the object is not a element.
 *  2. a given property is a tree node but the given object is not a tree node.
 */
export const initObject = (object, ...properties) => {
    //iterate properties
    for(const property of properties) {

        //if a property is a function, then invoke it with the object
        if (isFunction(property)) {
            property(object);
        }

        //else the property is a tree node, so insert it in another tree node
        else if (isTreeNode(property)) {
            if (isTreeNode(object)) {
                object.append?.(property) ?? object.appendChild(property);
            }
            else {
                throw new Error(`initObject: object not a tree node.`);
            }
        }

        //else if the property is an object, then set the object's properties from that
        else if (isObject(property)) {
            setProperties(object, property);
        }

        //else if the object is an element, add the value as a string
        else if (object instanceof Element) {
            object.append(property.toString());
        }

        //else throw exception; cannot set the property
        else {
            throw new Error(`initObject: invalid property value.`, { cause: property });
        }
    }
}
