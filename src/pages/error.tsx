import { useLocation } from "react-router-dom";

export default function ErrorPage() {
  const location = useLocation();
  const error = location.state && location.state.error;

  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error?.message}</i>
      </p>
    </div>
  );
}
