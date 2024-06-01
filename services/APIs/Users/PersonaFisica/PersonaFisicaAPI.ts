// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { PersonaFisica as PF, Credenciales} from "./PersonaFisica";

// export async function savePersonaFisica(persona: PF) {
//     if (!(persona instanceof PF)) {
//         throw new Error('Invalid object. Must be an instance of PersonaFisica.');
//     }
    
//     try {
//         const personaJSON = JSON.stringify(persona);
//         await AsyncStorage.setItem('PersonaFisica', personaJSON);
//         console.log('PersonaFisica saved successfully');
//     } catch (error) {
//         console.error('Error saving PersonaFisica:', error);
//         throw error;
//     }
// }