import { initializeApp } from 'firebase/app'
import 'firebase/auth'
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth'


import firebaseConfig from './config'

class Firebase {
    constructor(){
        const app = initializeApp(firebaseConfig)
        this.auth = getAuth(app)
    }

    //Registra un usuario
    async registrar(nombre,email,password){
        // try {
            const nuevoUsuario = await createUserWithEmailAndPassword(this.auth,email,password)
            return await updateProfile(nuevoUsuario.user,{
                displayName:nombre
            })
        // } catch (error) {
            // console.log(error)
        // }
    }
}

const firebase = new Firebase()
export default firebase