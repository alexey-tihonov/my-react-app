import { BrowserRouter, Route, Routes } from 'react-router';
import { Layout } from './Layout';
import { HomePage } from '../pages/HomePage';
import { PostsPage } from '../pages/PostsPage';
import { useAppSelector } from '../hooks/useAppSelector';
import { getLoadingStatus } from '../store/selectors';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { setLoadingStatus } from '../store/app-data';
import { useEffect } from 'react';

export const App = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const isAppLoading = useAppSelector(getLoadingStatus);

  useEffect(() => {
    dispatch(setLoadingStatus(false))
  }, [dispatch]);

  return (
    <BrowserRouter>
      {
        isAppLoading ? <h1>Loading...</h1> :
          <Routes>
            <Route element={<Layout />} >
              <Route index element={<HomePage />} />
              <Route path="/posts" element={<PostsPage />} />
              <Route path="*" element={<h1>Not Found</h1>} />
            </Route>
          </Routes>
      }
    </BrowserRouter>
  )
}
