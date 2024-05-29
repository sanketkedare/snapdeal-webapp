import app from '../../Utils/firebase'
import { getDatabase, set, ref } from "firebase/database";

const database = getDatabase(app);

const putData = (key, data) =>{
    set(ref(database, key), data)
}