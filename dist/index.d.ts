export declare function padStart(input: string, count?: number, fill?: string): string;
/**
 * Decode a version made up of words, default is two (firmware style)
 * but supports 3 (semver style).
 */
export declare function decodeVersion(version: number | string, words?: number): string;
/**
 * Encodes a string version to a number
 * For major.minor, it is a 32bit int
 * For major.minor.patch it is a 64bit int
 *
 * Note: The dirty hack of converting each word to hex then back
 * is a work around for JS 32bit bitwise operations.
 */
export declare function encodeVersion(version: string): number;
