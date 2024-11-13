import { AppRoutes } from './pages/app.routes.tsx'
import { globalStyles } from './styles'
import 'keen-slider/keen-slider.min.css'

globalStyles()
function App() {
    return <AppRoutes />
}

export default App