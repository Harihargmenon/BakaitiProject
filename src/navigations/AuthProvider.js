import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {GoogleSignin} from '@react-native-community/google-signin';
import {Alert} from 'react-native';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
            Alert.alert(
              'Invalid login',
              'The password is invalid or the user does not have a password.',
              [{text: 'OK'}],
            );
          }
        },
        googleLogin: async () => {
          try {
            // Get the users ID token
            const {idToken} = await GoogleSignin.signIn();

            // Create a Google credential with the token
            const googleCredential =
              auth.GoogleAuthProvider.credential(idToken);

            // Sign-in the user with the credential
            await auth()
              .signInWithCredential(googleCredential)
              //check if the google user is new or not
              .then(async userG => {
                if (userG.additionalUserInfo.isNewUser) {
                  //if the user is new, create a new user in the database
                  await firestore()
                    .collection('users')
                    .doc(auth().currentUser.uid)
                    .set({
                      //update email with gmail id
                      email: auth().currentUser.email,
                      createdAt: firestore.Timestamp.fromDate(new Date()),
                      userImg: null,
                    })
                    .then(() => {
                      console.log('User created');
                    });
                }
              })
              .catch(error => {
                console.log('Something went wrong with sign up: ', error);
              });
          } catch (error) {
            console.log({error});
          }
        },
        register: async (email, password, emailExists, displayName) => {
          const update = {
            displayName: 'displayName',
          };
          try {
            await auth()
              .createUserWithEmailAndPassword(email, password)
              .then(() => {
                //Once the user creation has happened successfully, we can add the currentUser into firestore
                //with the appropriate details.
                firestore()
                  .collection('users')
                  .doc(auth().currentUser.uid)
                  .set({
                    email: email,
                    createdAt: firestore.Timestamp.fromDate(new Date()),
                    userImg: null,
                  })
                  //update the user's display name
                  .then(() => {
                    auth().currentUser.updateProfile(update);
                  })
                  //ensure we catch any errors at this stage to advise us if something does go wrong
                  .catch(error => {
                    console.log(
                      'Something went wrong with added user to firestore: ',
                      error,
                    );
                    //alert in the app something went wrong
                  });
              })
              //we need to catch the whole sign up process if it fails too.
              .catch(error => {
                console.log('Something went wrong with sign up: ', error);
                emailExists();
              });
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
            //signout the user's Google account
            await GoogleSignin.signOut();
          } catch (e) {
            console.log(e);
          }
        },
        loginPhone: async (phone, confirmation, setConfirmation) => {
          try {
            const confirm = await auth().signInWithPhoneNumber(phone);
            setConfirmation(confirm);
            console.log(confirm);
          } catch (e) {
            console.log(e);
          }
        },
        verifyOtp: async (code, confirmation) => {
          console.log(confirmation);
          try {
            await confirmation.confirm(code);
          } catch (e) {
            console.log(e);
          }
        },
        //add the topic to the user's list of topics
        addTopic: async (topic, value) => {
          try {
            await firestore()
              .collection('users')
              .doc(auth().currentUser.uid)
              .update({
                [topic]: value,
              });
          } catch (e) {
            console.log(e);
          }
        },
        //display user's profile data and the fields
        getUserData: async () => {
          try {
            const userData = await firestore()
              .collection('users')
              .doc(auth().currentUser.uid)
              .get();
            console.log(userData);
            return userData.data();
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
