// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyASeGpAHA6Q2-0jCbqn5X7k140RPrW3vGw",
    authDomain: "real-websites-11abc.firebaseapp.com",
    projectId: "real-websites-11abc",
    storageBucket: "real-websites-11abc.appspot.com",
    messagingSenderId: "458564914278",
    appId: "1:458564914278:web:e02bdeb1de14be9bccf1a7",
    measurementId: "G-BVWY73P7VG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


function saveXMLData(name, email) {
    const xmlContent = `
<root>
    <entry>
        <name>${name}</name>
        <email>${email}</email>
    </entry>
</root>
    `;

    const db = getDatabase();
    const dbRef = ref(db, 'xmlData/' + Date.now());  // Use a unique key, e.g., timestamp

    set(dbRef, {
        xml: xmlContent
    }).then(() => {
        console.log('XML data saved successfully!');
    }).catch((error) => {
        console.error('Error saving XML data:', error);
    });
}
