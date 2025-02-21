import React from "react";
import Navbar from "../../components/navbar/navbar";
import SearchBar from "../../components/menu-bar/SearchBar";
import ListeItems from "../../components/liste-items-card/ListeItems";
import Footer from "../../components/footer/Footer";

export default function Home() {
  return (
    <div className="w-full py-16 min-h-screen bg-slate-50">
      <SearchBar />
      <ListeItems />
    </div>
  );
}
