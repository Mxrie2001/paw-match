import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App() {
    return (
        <Authenticator>
            {({ signOut, user }) => (
                <div>
                    <h1>Bienvenue, {user?.username}</h1>
                    <button onClick={signOut}>Se déconnecter</button>
                </div>
            )}
        </Authenticator>
    );
}

export default App;
