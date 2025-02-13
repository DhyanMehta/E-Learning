import {Account, Avatars, Client, OAuthProvider} from "react-native-appwrite";
import * as Linking from 'expo-linking';
export const config ={
    platform:'com.dhyan.EduSphere',
    endpoint:process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
    projectid:process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
}

export const client = new Client();
client
    .setEndpoint(config.endpoint)
    .setProject(config.projectid)
    .setPlatform(config.platform)

export const avatar = new Avatars(client);
export const account = new Account(client);

export async function login(){
    try{
        const redirectUri = Linking.createURL('/');
        const resonse = await account.createOAuth2Token(OAuthProvider.Google,redirectUri);

        if(!resonse) throw new Error('Failed to Login');

        const browserResult= await openAuthSessionAsync(
            resonse.toString(),
            redirectUri
        )

        if(browserResult.type!=='success') throw new Error('Failed to Login');

        const url=new URL(browserResult.url);

        const secret = url.searchParams.get('secret')?.toString();
        const userID= url.searchParams.get('userID')?.toString();

        if(!secret || !userID) throw new Error('Failed to Login');

        const session = await account.createSession(userID,secret);
        
        if(!session) throw new Error('Failed to Create a Session');


        return true;

    }catch(error){
        console.error(error);
        return false;
    }
}

export async function logout() {
    try{
    await account.deleteSession('current');
    return true;
    }catch(error){
    console.error(error);
    return false;

}
}

export async function getUser() {
    try{
        const response = await account.get();

        if(response.$id){
            const userAvatar = avatar.getInitials(XPathResult.name);
            return {
                ...response,
                avatar: userAvatar.toString(),
            }
        }

    }catch(error){
        console.error(error);
        return false;
    }
    
}