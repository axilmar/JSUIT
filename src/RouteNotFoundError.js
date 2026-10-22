/**
 * Route not found error.
 * Thrown when no route is found for a path.
 */
export class RouteNotFoundError extends Error {
    /**
     * The constructor.
     * @param {*} path the path for which a route was not found.
     */
    constructor(path) {
        super(`Route not found for path '${path}'`);
    }
}
