import './App.css';
import { QueryClientProvider, QueryClient } from 'react-query';
import {ReactQueryDevtools} from "react-query/devtools"
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { UserPosts } from './components/UserPosts';
import { Post } from './components/Post';

function App() {
  const queryClient = new QueryClient()

  return (
    <>
      <div className='navbar navbar-expand navbar-primary bg-primary mb-5'>
        <div className='container d-flex justify-content-center'>
          <h1 className='display-4 text-white fw-bold '>Postsbook</h1>
        </div>
      </div>
      <div className='container'>      
        <QueryClientProvider client={queryClient}>
          <Routes>
            < Route exact path = '/' element={<Home />}/>
            < Route path = '/posts/:userId' element={<UserPosts />}/>
            < Route path = '/posts/:userId/:postId' element={<Post />}/>
          </Routes>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </div>
    </>
  );
}

export default App;
