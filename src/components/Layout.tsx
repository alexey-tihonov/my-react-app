import { Outlet } from "react-router"
import { ErrorBoundary } from "./ErrorBoundary"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { Main } from "./Main"

export const Layout = (): React.ReactElement => {
    return (
        <ErrorBoundary>
            <div className="page">
                <div className="page__container">
                    <Header />
                    <Main ><Outlet /></Main>
                    <Footer className='page__footer' />
                </div>
            </div>
        </ErrorBoundary>
    );
}