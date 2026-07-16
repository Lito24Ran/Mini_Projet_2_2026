import { File } from 'expo-file-system';
import { useState } from 'react';


export interface Publication {            
    nom_personne: string;
    nom_du_lieu: string;
    latitude: number;         
    longitude: number;        
    tarif: string;
    heure_publication: string;
    description: string;
}


const Api = () => {
    const [loading, setLoading] = useState(false);
    const [photoFacture, setPhotoFacture] = useState<string | null>(null);
    const [photoAssurance, setPhotoAssurance] = useState<string | null>(null);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [accept, setAccept] = useState(false);



    const envoyerDemande = async (photoFactureUrl: string, photoAssuranceUrl: string): Promise<any> => {
        try {
            const formData = new FormData();

            const fichierFacture = new File(photoFactureUrl);
            const fichierAssurance = new File(photoAssuranceUrl);

        
            formData.append('file', fichierFacture as any);
            formData.append('file2', fichierAssurance as any);

            // 3. Envoi via fetch standard
            const response = await fetch('http://192.168.1.71:8000/demande/demande', {
                method: 'POST',
                headers: {
                },
                body: formData,
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Erreur HTTP ! Statut : ${response.status} - ${errorText}`);
            }

            return await response.json();

        } catch (error) {
            console.error("Erreur lors de l'envoi de la demande :", error);
            throw error;
        }
    };

    const Approuver_demande = async() =>{
        try {
            const response = await fetch('http://192.168.1.71:8000/demande/demandeApprouver')

            if (!response.ok){
                throw new Error("Une erreur est survenu ")
            }

            const json = await response.json();
            setData(json);
            // setAccept(true);
            return 1;

        } catch (error) {
            // setError(err.message); 
            console.error("Erreur lors de l'envoi de la demande :", error);
            throw error;
        }
    }

    

    const ajouterPublication = async (nouvellePublication: Publication): Promise<Publication> => {
        try {
            const response = await fetch('http://192.168.1.71:8000/publication/createpub/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(nouvellePublication) 
            });

            if (!response.ok) {
                throw new Error(`Erreur serveur : Status ${response.status}`);
            }

            const json: Publication = await response.json();
            return json;

        } catch (error) {
            console.error("Erreur lors de l'ajout de la publication :", error);
            throw error;
        }
    };




return {loading, envoyerDemande, Approuver_demande}
}

export default Api