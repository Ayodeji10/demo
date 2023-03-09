import React from "react";
import Head from "next/head";

function Header({ title, imageUrl }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="New Event App" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href={imageUrl} />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.3/css/bootstrap.min.css"
        integrity="sha512-SbiR/eusphKoMVVXysTKG/7VseWii+Y3FdHrt0EpKgpToZeemhqHeZeLWLhJutz/2ut2Vw1uQEj2MbRF+TVBUA=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
    </Head>
  );
}

export default Header;
