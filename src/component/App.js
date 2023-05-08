import { Route, Routes } from 'react-router-dom';
import { Navbar, PostDetail, Home, CreatePost } from './index';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route>
                    <Route path="/" element={Home} />
                    <Route path="/post/:postId" element={PostDetail} />
                    <Route path="/create-post" element={CreatePost} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
