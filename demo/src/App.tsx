import { Button } from 'lexgui-react'

function App() {
  return (
    <div>
      <h1>Testing lexgui-react</h1>
      <Button label="Click me!" onClick={() => alert('LexGUI React works!')} />
    </div>
  )
}

export default App
