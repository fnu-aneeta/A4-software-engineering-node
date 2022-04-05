/**
 * @file Implements mongoose model to CRUD
 * documents in the tuits collection
 */
import mongoose from "mongoose";
import TuitSchema from "./TuitSchema";
/**
 * The TuitModel is used for creating and reading documents of the {@link Tuit} type defined by the
 * {@link TuitSchema} from the underlying MongoDB database.
 * @typedef {TuitModel} TuitModel
 */
const TuitModel = mongoose.model("TuitModel", TuitSchema);
export default TuitModel;
