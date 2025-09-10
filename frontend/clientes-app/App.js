import React, { useState, useEffect } from "react";


import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import TelaRead from "./screens/TelaRead";

export default function App() {
  return (
    <ScrollView>
      <Header />

      <TelaRead />


      <Footer />
    </ScrollView>
  );
}
