import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import app from '../../Utils/firebase'

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const signUpwithEmailPassWord = async (email, password)=>
{ 
    const res = await createUserWithEmailAndPassword(auth, email, password);
    return res
}

export const logInWithEmailAndPassword = async (email, password)=>
{ 
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res
}

export const logout = () =>
{

}

export const signUpWithGoogle = () => {
    signInWithPopup(auth, googleProvider);

}

