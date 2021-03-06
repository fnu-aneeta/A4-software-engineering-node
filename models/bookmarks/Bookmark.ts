/**
 * @file Declares Like data type representing relationship between
 * users and tuits, as in user likes a tuit
 */
import Tuit from "../tuits/Tuit";
import User from "../users/User";

/**
 * @typedef Bookmark Represents bookmarks relationship between a user and a tuit,
 * as in a user Bookmark a tuit
 * @property {Tuit} bookmarkedTuit Tuit being bookmarked
 * @property {User} bookmarkedBy User bookmarking the tuit
 */

export default interface Bookmark {
    bookmarkedTuit: Tuit,
    bookmarkedBy: User
};
