/**
 * Outlet not found error.
 * Thrown when no outlet element exists for a route.
 */
export class OutletNotFoundError extends Error {
    /**
     * The constructor.
     * @param {*} path the path for which an outlet was not found.
     */
    constructor(path) {
        super(`Outlet not found for path '${path}'`);
    }
}
