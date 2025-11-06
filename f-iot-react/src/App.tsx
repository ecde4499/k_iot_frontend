import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Basic from '@/pages/a_basic';
import RoutePages from '@/pages/b_route'
import Hooks from '@/pages/c_hooks';
import NaviBar from './components/NaviBar';
import PostList from './_practices/a_basic/PostList';
import PostDetail from './components/PostDetail';
import SearchApp from './_practices/c_hooks/SearchApp';
import Z_products from './pages/b_route/Z_products';
import Z_ProductDetail from './pages/b_route/Z_ProductDetail';
import Z_ProductInfo from './pages/b_route/Z_ProductInfo';
import Z_ProductReviews from './pages/b_route/Z_ProductReviews';
import Z_Dashboard from './pages/b_route/Z_Dashboard';

function App() {

  return (
    <>
      <h1>Korea IoT React</h1>
      <NaviBar />
      {/* Routes 태그: Route를 감싸는 컴포넌트 */}
      <Routes>
        {/* Route 태그: 특정 경로에 컴포넌트 지정 (단일 태그 권장) */}
        <Route path='/basic' element={<Basic />} />
        {/* 중첩 라우팅 사용을 위해서 반드시 부모 Route의 path 끝에 /*가 필수! */}
        <Route path='/route/*' element={<RoutePages />} />

        <Route path='/hooks' element={<Hooks />} />

        {/* //@ _practice 실습 코드 */}
        <Route path='/practice/post' element={<PostList />} />
        <Route path='/practice/post/:id' element={<PostDetail />} />
        <Route path='/practice/search' element={<SearchApp />} />

        {/* //@ pages/b_Route - Z_실습 코드 */}
        <Route path='/' element={<Navigate to="/products" />} />
        <Route path='/products' element={<Z_products />} />
        <Route path='/products/:id' element={<Z_ProductDetail />}>
          {/* 중첩 라우트 */}
          <Route path='info' element={<Z_ProductInfo />} />
          <Route path='reviews' element={<Z_ProductReviews />} />
        </Route>
        <Route path='/dashboard' element={<Z_Dashboard />} />

      </Routes>
    </>
  )
}

export default App
