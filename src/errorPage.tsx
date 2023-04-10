import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error: any = useRouteError()

  return (
    <div id="error-page">
      <h1>Oops! This page is under Maintenance</h1>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
