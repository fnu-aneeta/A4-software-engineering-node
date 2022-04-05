/**
 * @file Implements mongoose schema to CRUD
 * documents in the bookmarks collection
 */
import mongoose, {Schema} from "mongoose";
import Bookmark from "../../models/bookmarks/Bookmark";


/**
 * @typedef Bookmark Represents tuiter user's bookmarks
 * @property {ObjectId[]} bookmarkedTuit user's bookmark tuit
 * @property {ObjectId[]} bookmarkedBy user tuits bookmarked by
 */
const BookmarkSchema = new mongoose.Schema<Bookmark>({
    bookmarkedTuit: {type: Schema.Types.ObjectId, ref: "TuitModel"},
    bookmarkedBy: {type: Schema.Types.ObjectId, ref: "UserModel"},
}, {collection: "bookmarks"});
export default BookmarkSchema;
