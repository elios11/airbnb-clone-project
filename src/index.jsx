import ReactDOM from "react-dom/client"
import App from "./App"

function Page() {
  return (
    <App />
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Page />)