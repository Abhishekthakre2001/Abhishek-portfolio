// import React from 'react';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from './Navbar.jsx';
// import About from './About.jsx';
// import Contact from './Contact.jsx';
// // import Footer from './Footer.jsx';
// import Hireme from './Hireme.jsx';
// import Home from './Home.jsx';
// import Resume from './Resume.jsx';
// import Services from './Services.jsx';
// import Skills from './Skills.jsx';


// export default function Routeing() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Navbar />}>
//           <Route path="/About" element={<About />} />
//           <Route path="/Contact" element={<Contact />} />
//           <Route path="/Hireme" element={<Hireme />} />
//           <Route path="/Home" element={<Home />} />
//           <Route path="/Resume" element={<Resume />} />
//           <Route path="/Services" element={<Services />} />
//           <Route path="/Skills" element={<Skills />} />

//         </Route>
//       </Routes>
//     </BrowserRouter>
//   )
// }
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Hireme from './Hireme.jsx';
import Home from './Home.jsx';
import Resume from './Resume.jsx';
import Services from './Services.jsx';
import Skills from './Skills.jsx';
import Footer from './Footer.jsx';
import Projectdetail from './Projectdetail.jsx';

export default function Routeing() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Hireme" element={<Hireme />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Projectdetail/:project" element={ <Projectdetail />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
