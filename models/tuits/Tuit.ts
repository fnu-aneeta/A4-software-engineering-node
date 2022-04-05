/**
 * @file Declares Tuit data type representing any Tuit
 */
import User from "../users/User";
import Stats from "./Stats";

/**
 * A Tuit is a short post, authored by a {@link User}
 * @typedef {Tuit} Tuit
 * @property {string} tuit - contains the user's post
 * @property {User | null} postedBy - the author of the Tuit
 * @property {Date} postedOn - the Date this Tuit was posted
 */
export default interface Tuit {
    tuit: string,
    postedBy: User | null,
    postedOn?: Date,
    image?: String,
    youtube?: String,
    avatarLogo?: String,
    imageOverlay?: String,
    stats: Stats
};
