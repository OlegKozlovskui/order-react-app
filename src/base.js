import Rebase from 're-base';
import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBC01DvMMda3A8I-EmsC8CMPWJy76RWpBY",
  authDomain: "fishes-order.firebaseapp.com",
  databaseURL: "https://fishes-order.firebaseio.com",
};

const app = firebase.initializeApp(config);
const base = Rebase.createClass(app.database());

export default base;

