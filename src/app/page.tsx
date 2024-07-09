import Image from "next/image";

export default function Home() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center">
        <img src="https://cdn.discordapp.com/attachments/1163937321763221678/1260131270428594236/AWLogobyDesigner.png?ex=668e3432&is=668ce2b2&hm=3c0e2f0ee5701a343598bdb2ad7115c607a09969e0db45471fc85890fda1d980&" alt="Logo" className="w-12 h-12 mr-4" />
          <h1 className="text-3xl font-bold">Hi There! <span className="text-yellow-500">👋</span></h1>
        </div>
        <nav className="space-x-4">
          <a href="#" className="link">Portfolio</a>
          <a href="#" className="link">Blog</a>
          <a href="#" className="link">About</a>
        </nav>
      </header>
      <main>
        <section className="flex items-center mb-8">
          <img src="https://cdn.discordapp.com/attachments/1163937321763221678/1260132429469978624/bucciarati-gang-torture-dance_cropped.png?ex=668e3547&is=668ce3c7&hm=a8ffbb29c81891a0f17ae5d57aeaa9a78c98022e3959eb9b24b1e95befcf773e&" alt="Profile" className="rounded-full border-4 border-blue-500 w-40 h-40 mr-8" />

          <div>
            <h2 className="text-2xl font-bold">I&apos;m Alton Wu</h2>
            <p className="flex items-center space-x-2">
              <i className="fas fa-briefcase icon"></i>
              <span>UCLA</span>
              <span className="text-gray-500">Civil Engineering, B.S.</span>
            </p>
            <p className="flex items-center space-x-2">
              <i className="fas fa-map-marker-alt icon"></i>
              <span>Los Angeles, CA</span>
            </p>
            <p className="mt-4">
              Studying at the Henry Samueli School of Engineering and Applied Science, I am passionate about structural engineering, project management, and construction. Through various projects and coursework, I have developed skills in MATLAB, AutoCAD, and project planning.
            </p>
            <p className="mt-4">
            In my free time, I enjoy participating in triathlons, playing board games, and joining in on zombie tag, gambling nights (with chips not worth money), and murder mystery events. I believe in the power of community and teamwork to achieve great things. Let&apos;s connect!
            </p>
            <div className="flex space-x-4 mt-4">
              <i className="fab fa-twitter icon"></i>
              <i className="fab fa-linkedin icon"></i>
              <i className="fab fa-github icon"></i>
            </div>
          </div>
        </section>
        <section className="mb-8">
          <h3 className="section-title text-xl font-bold mb-4">Courses Taken</h3>
          <ul>
            <li>Calculus of Several Variables (MATH 32B)</li>
            <li>Differential Equations (MATH 33B)</li>
            <li>Differential and Integral Calculus (MATH 31A)</li>
            <li>Integration and Infinite Series (MATH 31B)</li>
            <li>Linear Algebra and Applications (MATH 33A)</li>
            <li>Physics for Scientists and Engineers: Mechanics (PHYSICS 1A)</li>
            <li>Statics and Strength of Materials (MECH&AE 101)</li>
          </ul>
        </section>
        <section className="mb-8">
          <h3 className="section-title text-xl font-bold mb-4">Projects</h3>
          <div className="flex mb-4">
            <img src="https://placehold.co/100x50" alt="UCLA Logo" className="mr-4" />
            <div>
              <h4 className="text-lg font-bold">ASCE Timber</h4>
              <p className="text-gray-500">UCLA American Society of Civil Engineers</p>
              <p>Contributed to the construction and design of timber structures, ensuring compliance with safety standards and structural integrity. Achieved 3rd place at the 2024 ASCE Timber competition in Hawaii.</p>
            </div>
          </div>
        </section>
        <section className="mb-8">
          <h3 className="section-title text-xl font-bold mb-4">Awards and Honors</h3>
          <div className="flex mb-4">
            <div>
              <h4 className="text-lg font-bold">Almont League Champion</h4>
              <p className="text-gray-500">Cross-country and Track & Field</p>
              <p>Consistently placed in the top 3 of three league races, best performance at league finals.</p>
            </div>
          </div>
          <div className="flex mb-4">
            <div>
              <h4 className="text-lg font-bold">Fall Novice Humorous Interpretation Champion</h4>
              <p className="text-gray-500">Speech & Debate</p>
              <p>Scored the most number of points in the HI event for the tournament.</p>
            </div>
          </div>
          <div className="flex mb-4">
            <div>
              <h4 className="text-lg font-bold">Award for Excellence</h4>
              <p className="text-gray-500">AP Physics</p>
              <p>Chosen by the physics department for exemplifying hard work, commitment, and adherence to the BRAVO way.</p>
            </div>
          </div>
          <div className="flex mb-4">
            <div>
              <h4 className="text-lg font-bold">Almont League Champion</h4>
              <p className="text-gray-500">1-mile, Track & Field</p>
              <p>Consistently placed first in three league races, best performance at league finals.</p>
            </div>
          </div>
        </section>
        <section className="mb-8">
          <h3 className="section-title text-xl font-bold mb-4">Activities</h3>
          <div className="flex mb-4">
            <div>
              <h4 className="text-lg font-bold">Roblox Studio Community Helper</h4>
              <p>Tutored in the RSC Discord, helping 200+ kids learn JavaScript, Python, the Discord API, and how to work with Roblox Studio.</p>
            </div>
          </div>
          <div className="flex mb-4">
            <div>
              <h4 className="text-lg font-bold">Red Cross Volunteer</h4>
              <p>Distributed nutrition to runners, worked shifts at food pantries, and donated blood through Power Red.</p>
            </div>
          </div>
        </section>
        <section className="mb-8">
          <h3 className="section-title text-xl font-bold mb-4">Skills</h3>
          <ul>
            <li>Structural Analysis</li>
            <li>Microsoft Word</li>
            <li>Concrete</li>
            <li>Project Planning</li>
            <li>Structural Engineering</li>
            <li>MATLAB</li>
            <li>Microsoft Excel</li>
            <li>Construction</li>
            <li>Microsoft Office</li>
            <li>Project Management</li>
            <li>AutoCAD</li>
            <li>Civil Engineering</li>
          </ul>
        </section>
      </main>
      <footer className="text-center mt-8">
        <p>Thanks for Reading!</p>
      </footer>
    </div>

  );
}
