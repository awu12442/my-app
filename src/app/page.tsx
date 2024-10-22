import Navbar from "@/components/Navbar";
import PageWrapper from "@/components/PageWrapper";
import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (<PageWrapper>
    <main>
      <section className="flex items-center mb-8">
        <Image
          src="https://cdn.discordapp.com/attachments/1163937321763221678/1260132429469978624/bucciarati-gang-torture-dance_cropped.png?ex=668e3547&is=668ce3c7&hm=a8ffbb29c81891a0f17ae5d57aeaa9a78c98022e3959eb9b24b1e95befcf773e&"
          alt="Profile"
          width={160}
          height={160}
          className="rounded-full border-2 border-black w-40 h-40 mr-8"
        />

        <div>
          <h2 className="text-2xl font-bold">Alton Wu</h2>
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
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter icon"></i></a>
            <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin icon"></i></a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"><i className="fab fa-github icon"></i></a>
          </div>
        </div>
      </section>
      <section className="mb-8  bg-gray-100 rounded-lg p-4">
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
      <section className="mb-8 bg-gray-100 rounded-lg p-4">
        <h3 className="section-title text-xl font-bold mb-4">Projects</h3>
        <div className="flex mb-4">
          <Image
            src="https://cdn.discordapp.com/attachments/1163937321763221678/1260152584904118292/327027386_186748107336415_5259798470045548919_n.jpg?ex=668e480c&is=668cf68c&hm=391b38df1d110d1f7ffa8999c08325590cf1b6dd8fc1f39da0434f2dfe6506b9&"
            alt="UCLA Logo"
            width={100}
            height={50}
            className="mr-4"
          />
          <div>
            <h4 className="text-lg font-bold">ASCE Timber</h4>
            <p className="text-gray-500">UCLA American Society of Civil Engineers</p>
            <p>Contributed to the construction and design of timber structures, ensuring compliance with safety standards and structural integrity. Achieved 3rd place at the 2024 ASCE Timber competition in Hawaii.</p>
          </div>
        </div>
      </section>
      <section className="mb-8 bg-gray-100 rounded-lg p-4">
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
      <section className="mb-8 bg-gray-100 rounded-lg p-4">
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
      <section className="mb-8 bg-gray-100 rounded-lg p-4">
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
    <footer className="text-center my-4">
      <p>Thanks for Reading!</p>
    </footer></PageWrapper>
  )


}
