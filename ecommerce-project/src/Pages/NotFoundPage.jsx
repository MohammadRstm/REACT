import { Header } from "../components/Header";

export function NotFoundPage(){
    return(
        <>
            <Header />
            <div className="not-found-message-container">
                <p className="not-found-message">
                    Sorry we couldn&apos;t find youre requested page
                </p>
            </div>
        </>
    );
}