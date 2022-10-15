<script type="module">

  // Import the functions you need from the SDKs you need

  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";

  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";

  // TODO: Add SDKs for Firebase products that you want to use

  // https://firebase.google.com/docs/web/setup#available-libraries


  // Your web app's Firebase configuration

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {

    apiKey: "AIzaSyCwGsmF-Hqq64fu_VToFkFGGTl3mGl9jcQ",

    authDomain: "jetfox-homepage.firebaseapp.com",

    projectId: "jetfox-homepage",

    storageBucket: "jetfox-homepage.appspot.com",

    messagingSenderId: "1007888062090",

    appId: "1:1007888062090:web:4d357a1eec840b180d7f73",

    measurementId: "G-P1WGSC1ETT"

  };


  // Initialize Firebase

  const app = initializeApp(firebaseConfig);

  const analytics = getAnalytics(app);

</script>