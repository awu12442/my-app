import Navbar from "@/components/Navbar";
import PageWrapper from "@/components/PageWrapper";
import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (<PageWrapper>  <section>
    <h2 className="section-title">Libraries</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="card">
        <img src="https://placehold.co/100x100" alt="CrossWindow" />
        <div className="card-content">
          <h3>CrossWindow</h3>
          <p><i className="fas fa-book"></i> Library <i className="fas fa-calendar-alt"></i> 6/6/2021 - Updated 5 months Ago</p>
          <p>A cross platform system abstraction library written in C++ for managing windows and performing OS tasks...</p>
          <a href="#">Read More...</a>
        </div>
      </div>
      <div className="card">
        <img src="https://placehold.co/100x100" alt="Foil" />
        <div className="card-content">
          <h3>Foil</h3>
          <p><i className="fas fa-book"></i> Library <i className="fas fa-calendar-alt"></i> 6/6/2020 - Updated 5 months Ago</p>
          <p>Foil is a portfolio CMS library designed for engineers, artists, technical artists, musicians, and bloggers looking ...</p>
          <a href="#">Read More...</a>
        </div>
      </div>
      <div className="card">
        <img src="https://placehold.co/100x100" alt="Coronal" />
        <div className="card-content">
          <h3>Coronal</h3>
          <p><i className="fas fa-book"></i> Library <i className="fas fa-calendar-alt"></i> 3/3/2020 - Updated 5 months Ago</p>
          <p>My personal research engine for testing and developing the latest real-time rendering and engine architecture research...</p>
          <a href="#">Read More...</a>
        </div>
      </div>
      <div className="card">
        <img src="https://placehold.co/100x100" alt="CrossShader" />
        <div className="card-content">
          <h3>CrossShader</h3>
          <p><i className="fas fa-book"></i> Library <i className="fas fa-calendar-alt"></i> 12/26/2018 - Updated 5 months Ago</p>
          <p>A cross compiler for shader languages. Convert between GLSL, HLSL, Metal Shader Language, or older versions of GLSL...</p>
          <a href="#">Read More...</a>
        </div>
      </div>
    </div>
  </section>
    <section>
      <h2 className="section-title">Research</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="card">
          <img src="https://placehold.co/100x100" alt="Baked Texture Generation" />
          <div className="card-content">
            <h3>Baked Texture Generation</h3>
            <p><i className="fas fa-flask"></i> Research <i className="fas fa-calendar-alt"></i> 10/7/2018 - Updated 5 months Ago</p>
            <p>A technical chapter detailing a technique of handling baked texture generation in artist driven environments...</p>
            <a href="#">Read More...</a>
          </div>
        </div>
        <div className="card">
          <img src="https://placehold.co/100x100" alt="Realtime Celestial Rendering" />
          <div className="card-content">
            <h3>Realtime Celestial Rendering</h3>
            <p><i className="fas fa-flask"></i> Research <i className="fas fa-calendar-alt"></i> 3/18/2017 - Updated 5 months Ago</p>
            <p>A method of rendering starry skies in real time that doubles as indirect lighting for physically based rendering...</p>
            <a href="#">Read More...</a>
          </div>
        </div>
      </div>
    </section>
    <section>
      <h2 className="section-title">Videos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="card">
          <img src="https://placehold.co/100x100" alt="Frame Analysis - Control" />
          <div className="card-content">
            <h3>Frame Analysis - Control</h3>
            <p><i className="fas fa-video"></i> Blog <i className="fas fa-calendar-alt"></i> 6/11/2021 - Updated 2 months Ago</p>
            <p>A review of the rendering architecture of Control, reviewing their ray tracer, rendering architecture, and technical ...</p>
            <a href="#">Read More...</a>
          </div>
        </div>
        <div className="card">
          <img src="https://placehold.co/100x100" alt="Frame Analysis - Minecraft RTX Beta" />
          <div className="card-content">
            <h3>Frame Analysis - Minecraft RTX Beta</h3>
            <p><i className="fas fa-video"></i> Blog <i className="fas fa-calendar-alt"></i> 5/8/2020 - Updated 2 months Ago</p>
            <p>A review of the rendering architecture of the new Minecraft RTX renderer, reviewing their implementation of SVGF, their ...</p>
            <a href="#">Read More...</a>
          </div>
        </div>
        <div className="card">
          <img src="https://placehold.co/100x100" alt="Frame Analysis - Mortal Kombat 11" />
          <div className="card-content">
            <h3>Frame Analysis - Mortal Kombat 11</h3>
            <p><i className="fas fa-video"></i> Blog <i className="fas fa-calendar-alt"></i> 4/27/2020 - Updated 2 months Ago</p>
            <p>Because of Mortal Kombat 11's impressive presentation, I just had to take a look at their renderer to see what's ...</p>
            <a href="#">Read More...</a>
          </div>
        </div>
        <div className="card">
          <img src="https://placehold.co/100x100" alt="Frame Analysis - Overwatch 1" />
          <div className="card-content">
            <h3>Frame Analysis - Overwatch 1</h3>
            <p><i className="fas fa-video"></i> Blog <i className="fas fa-calendar-alt"></i> 4/12/2020 - Updated 2 months Ago</p>
            <p>A review of the rendering architecture of the game Overwatch 1, from its depth shadow pass all the way to its UI pass ...</p>
            <a href="#">Read More...</a>
          </div>
        </div>
      </div>
    </section></PageWrapper>
  );
}
