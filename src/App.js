// import logo from './logo.svg';
import React from 'react';
import About from './components/About';
import Nav from './components/Nav';
import ContactForm from './components/Contact';
import Projects from './components/Projects';
// import Resume from './components/Resume';
import Footer from './components/Footer';
import './App.css';
import './index'

function App() {
    //  set initial value of contact selected to false to prevent the contact form from showing when user initially enters the page
    // const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous"></link>
      <Nav />
      <main>
        <About />
        <div>
          <Projects />
        </div>
        <div>
          <ContactForm />
          </div>
        {/* <Resume /> */}
   
        {/* {!contactSelected ? (
          <>
            <About></About>
          </>
        ) : (
            <ContactForm></ContactForm>
        )} */}
     
      </main>
      <Footer />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js" integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2" crossorigin="anonymous"></script>
    </div>
  );
}

export default App;
