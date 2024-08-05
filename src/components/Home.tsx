// @ts-nocheck
import {
  ArwesThemeProvider,
  Button,
  Card,
  StylesBaseline,
  Text,
} from "@arwes/core"

export const Home = () => {
  return (
    <ArwesThemeProvider>
      <StylesBaseline />
      <div className="home">
        <Card>
          <Text>Welcome to the Home Page</Text>
          <Button>Click Me</Button>
        </Card>
      </div>
    </ArwesThemeProvider>
  )
}
