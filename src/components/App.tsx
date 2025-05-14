import { BrowserRouter, Route, Routes } from 'react-router';
import { Layout } from './Layout';
import { HomePage } from '../pages/HomePage';
import { PostsPage } from '../pages/PostsPage';

export const App = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
