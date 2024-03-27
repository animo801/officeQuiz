// import {auth, googleAuthProvider} from '../lib/firebase';

export default function EnterPage(props) {
  const email = null; 

  return (
        <>
          <h1>My email is {email}</h1>
          
          <SignInButton/>
        </>
  );
}

function SignInButton () {
  const signInWithGoogle = async () => {
    await auth.signInWithPopup(googleAuthProvider);
  };

  return (
    <button onClick={signInWithGoogle}>Sign In</button>
  );

}

function SignOutButton () {
    
}
