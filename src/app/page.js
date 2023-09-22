import Navbar from "./componets/Navbar";

import About from "./componets/About";

import Solutions from "./componets/Solutions";



import Audit_Service from "./componets/Audit_Service";



import Our_Development from "./componets/Our_Development";

import Growing_Values from "./componets/Growing_Values";

import Our_Usp from "./componets/Our_Usp"

import Services from "./componets/Services";


import Key_Patterns from "./componets/Key_Pattners"

export default function Home() {
  return (
    <>


      <Navbar />
      {/* First Page */}

      <About />

      {/* Second Page */}


      <Solutions />

      {/* Third Page */}


      <Audit_Service />
      {/*  Fourth Page*/}

      <Our_Development />
      {/* Fifth Page */}


      <Growing_Values />
      {/* Six Page */}


      <Our_Usp />
      {/* Seventh Page*/}
      <Key_Patterns />

      <Services />
      {/* Eight Page */}
    </>
  )
}

