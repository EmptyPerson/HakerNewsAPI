import './App.css';
import News from "./component/News/News";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PageStory from "./component/OnesStory/PageStory";


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={News}/>
                    <Route exact path="/story/:id" component={PageStory}/>
                    <Route
                        path="*"
                        component={News}
                    />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
