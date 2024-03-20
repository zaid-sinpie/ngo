import "./App.css";
import Section from "./component/Section.jsx";
import Container from "./component/Container.jsx";
import Navbar from "./component/Navbar.jsx";

function App() {
  return (
    <>
      <Section>
        <Navbar></Navbar>
        <Container></Container>
      </Section>
    </>
  );
}

export default App;
