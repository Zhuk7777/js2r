import React from 'react';
import Header from './components/header';
import Main from './components/main';
import Cryptocurrency from './components/cryptocurrency';

class App extends React.Component {
    render()
    {
        return (
            <div>
            <Header/>
            <Cryptocurrency/>
            <Main/>
         </div>
        )
    }
}
export default App