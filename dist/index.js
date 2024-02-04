"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textEllipsisEnd = exports.textEllipsisStart = exports.textEllipsisMiddle = void 0;
const DEFAULT_ELLIPSIS = '…';
/**
 * Clip the string from its middle
 *
 * @param origin string to truncate
 * @param length length to trim - does not include the length of the ellipsis
 * @param ellipsis specify the ellipsis - default false '…'
 * @param rear_longer rear part be made longer if length is an odd number - default false
 * @returns clipped string
 */
const textEllipsisMiddle = (origin, length, ellipsis = DEFAULT_ELLIPSIS, rear_longer = false) => {
    const preProcessResult = preProcess(origin, length);
    if (preProcessResult.isValid)
        return preProcessResult.response;
    const splitPoint = rear_longer
        ? Math.floor(length / 2)
        : Math.round(length / 2);
    return (origin.substring(0, splitPoint) +
        ellipsis +
        origin.substring(origin.length - (length - splitPoint), origin.length));
};
exports.textEllipsisMiddle = textEllipsisMiddle;
/**
 * Clip the string from its start
 *
 * @param origin string to truncate
 * @param length length to trim - does not include the length of the ellipsis
 * @param ellipsis specify the ellipsis - default false '…'
 * @returns clipped string
 */
const textEllipsisStart = (origin, length, ellipsis = DEFAULT_ELLIPSIS) => {
    const preProcessResult = preProcess(origin, length);
    if (preProcessResult.isValid)
        return preProcessResult.response;
    return (ellipsis +
        origin.substring(origin.length - length, origin.length));
};
exports.textEllipsisStart = textEllipsisStart;
/**
 * Clip the string from its end
 *
 * @param origin string to truncate
 * @param length length to trim - does not include the length of the ellipsis
 * @param ellipsis specify the ellipsis - default false '…'
 * @returns clipped string
 */
const textEllipsisEnd = (origin, length, ellipsis = DEFAULT_ELLIPSIS) => {
    const preProcessResult = preProcess(origin, length);
    if (preProcessResult.isValid)
        return preProcessResult.response;
    return (origin.substring(0, length) +
        ellipsis);
};
exports.textEllipsisEnd = textEllipsisEnd;
const preProcess = (origin, length) => {
    if (!(origin && origin.length))
        return { isValid: true, response: undefined };
    if (length < 1)
        return { isValid: true, response: undefined };
    if (origin.length <= length)
        return { isValid: true, response: origin };
    return {
        isValid: false,
    };
};
