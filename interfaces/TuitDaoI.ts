import Tuit from "../models/tuits/Tuit";
import Stats from "../models/tuits/Stats";

/**
 * @file Declares API for Tuits related data access object methods
 */
export default interface TuitDaoI {
    createTuit(tuit: Tuit): Promise<Tuit>;
    findAllTuits (): Promise<Tuit[]>;
    findAllTuitsByUser (uid: string): Promise<Tuit[]>;
    findTuitById (tid: string): Promise<Tuit>;
    createTuitByUser (uid: string, tuit: Tuit): Promise<Tuit>;
    updateTuit (tid: string, tuit: Tuit): Promise<any>;
    updateTuitStats(tid: string, newStats: Stats): Promise<object>;
    deleteTuit (tid: string): Promise<any>;
};
