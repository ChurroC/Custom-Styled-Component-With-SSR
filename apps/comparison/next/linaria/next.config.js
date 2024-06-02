/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */

// next.config.js
import withLinaria from "next-with-linaria";

/** @type {import('next-with-linaria').LinariaConfig} */
const config = {
    // ...your next.js config
};

export default withLinaria(config);
