
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Header from './header'
import Main from './main'
import imageUrls from './data.json'

function App() {
  return (
    <Container>
      <Header title="Beast Judge" />
      <Main message="Make Your Beast Opinion Known" imageUrls={imageUrls} />
    </Container>
  );
}

export default App;
