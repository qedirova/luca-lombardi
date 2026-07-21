import { firebaseAuth } from "@/lib/firebase"
import { signInWithPopup,GoogleAuthProvider} from "firebase/auth"




const providers = {
    google:new GoogleAuthProvider()
}

type Provider= keyof typeof providers

export const useAuth=()=>{

    async function handleLogin(provider:Provider) {
        try {
            
    const {user} = await signInWithPopup(firebaseAuth,providers[provider])
    console.log(user)

        } catch (error) {
            console.log(error)
            throw error
        }
    }

    return{
        handleGoogleLogin:()=>handleLogin("google")
    }
}