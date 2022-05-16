export default function(errorCode){
    switch(errorCode){
        case 'auth/invalid-email':
            return 'Geçersiz e-posta adresi';

        case 'auth/email-already-exist':
            return 'kullanıcı zaten kayıtlı';

        case 'auth/user-not-found':
            return 'kullanıcı bulunamadı';

        case 'auth/weak-password':
            return 'Parola çok zayıf';

         case 'auth/email-already-in-use':
             return 'Kullanıcı zaten kayıtlı';
        case 'auth/wrong-password':
             return 'Parola yanlış'     
        default:
            return errorCode;
    }

}