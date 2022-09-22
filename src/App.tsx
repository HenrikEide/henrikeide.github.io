import React from "react";
import CardL from "./CardL";
import Navbar from "./Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Homepage
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="px-4 py-6 sm:px-0">
              <CardL title={"Oi"} content={"Hello"} image={"helo"} />
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  );
}
