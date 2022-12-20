import './App.css';
import News from "./component/News/News";
import {BrowserRouter, Route, Router, Switch} from "react-router-dom";
import OnesStory from "./component/OnesStory/OnesStory";
import TreeComments from "./component/OnesStory/TreeComments";
import Comments from "./component/Comments/Comments";
import Test from "./component/Comments/Test";
import Navbar from "./component/Navbar/Navbar";


function App() {
  return (
    <div className="App">
        <BrowserRouter>

            <Switch>

                <Route exact path="/" component={News}/>
                <Route exact path="/story/:id" component={TreeComments}/>
                <Route exact path="/:id" component={Test}/>
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
