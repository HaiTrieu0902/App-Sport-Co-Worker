/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import BootSplash from 'react-native-bootsplash';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import NavigationMain from './src/navigation';

function App(): JSX.Element {
    // useEffect(() => {
    //     const init = async () => {};
    //     init().finally(async () => {
    //         await BootSplash.hide({ fade: true });
    //     });
    // }, []);
    return (
        <React.Fragment>
            <SafeAreaProvider>
                <NavigationMain />
            </SafeAreaProvider>
        </React.Fragment>
    );
}

export default App;
