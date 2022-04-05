/**
 * @file Implements mongoose schema for Tuits
 */
import mongoose, {Schema} from "mongoose";
import Tuit from "../../models/tuits/Tuit";

/**
 * A {@link Tuit} is a short post, authored by a {@link User}. The TuitSchema represents how a
 * Tuit is represented in the database.
 * @typedef {TuitSchema} TuitSchema
 * @property {string} tuit - contains the user's post
 * @property {User | null} postedBy - the author of the Tuit
 * @property {Date} postedOn - the Date this Tuit was posted
 */
const TuitSchema = new mongoose.Schema<Tuit>({
    tuit: {type: String, required: true},
    postedBy: {type: Schema.Types.ObjectId, ref: "UserModel"},
    postedOn: {type: Date, default: Date.now},
    image: String,
    youtube: String,
    avatarLogo: String,
    imageOverlay: String,
    stats: {
        replies: {type: Number, default: 0},
        retuits: {type: Number, default: 0},
        likes: {type: Number, default: 0},
        dislikes: {type: Number, default: 0}
    },
}, {collection: "tuits"});
export default TuitSchema;
