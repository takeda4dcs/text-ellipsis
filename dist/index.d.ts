/**
 * Clip the string from its middle
 *
 * @param origin string to truncate
 * @param length length to trim - does not include the length of the ellipsis
 * @param ellipsis specify the ellipsis - default false '…'
 * @param rear_longer rear part be made longer if length is an odd number - default false
 * @returns clipped string
 */
export declare const textEllipsisMiddle: (origin: string, length: number, ellipsis?: string, rear_longer?: boolean) => string | undefined;
/**
 * Clip the string from its start
 *
 * @param origin string to truncate
 * @param length length to trim - does not include the length of the ellipsis
 * @param ellipsis specify the ellipsis - default false '…'
 * @returns clipped string
 */
export declare const textEllipsisStart: (origin: string, length: number, ellipsis?: string) => string | undefined;
/**
 * Clip the string from its end
 *
 * @param origin string to truncate
 * @param length length to trim - does not include the length of the ellipsis
 * @param ellipsis specify the ellipsis - default false '…'
 * @returns clipped string
 */
export declare const textEllipsisEnd: (origin: string, length: number, ellipsis?: string) => string | undefined;
