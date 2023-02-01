import React from "react";

const Main = () => {
  return (
    <main className="max-w-6xl mx-auto mt-6">
      {/* <!-- Hero --> */}

      <section className="hero scroll-snap">
        <span className="hero-heading">
          <p id="typing"></p>
          <p id="blinking"></p>
        </span>
        <img
          src="./assets/website-development.svg"
          alt="Web development scalable graphic"
        />
      </section>

      {/* <!-- Best projects section --> */}

      <section className="scroll-snap">
        {/* <!-- Heading: Projects --> */}

        <section className="heading" id="projects">
          <h2>Projects</h2>
          <section className="spikes"></section>
        </section>

        {/* <!-- projects --> */}

        <button
          className="see-all-btn"
          onclick="location.href='./project_1.html';"
        >
          See All Projects
        </button>
        <div className="project-container">
          <div className="project">
            <h3>any number Project</h3>
            <img src="./assets/Screenshot-2.2.png" alt="project " />
            <p>
              The any number mini-game project was the second major endeavor of
              the DigitalCrafts bootcamp. This project explores several
              JavaScript techniques including drag & drop, dropdowns, modals,
              and... confetti.
            </p>
            <button onclick="location.href='./project_2.html';">More..</button>
          </div>
          <div className="project">
            <h3>Really Cool Project</h3>
            <img src="./assets/startup-idea.svg" alt="project " />
            <p>
              This is a short description of a really cool project. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Ea, ab. Atque
              expedita voluptatem autem a tenetur, maiores nisi adipisci
              incidunt reprehenderit aperiam, ullam sequi fugiat necessitatibus
              minus odio quos. Itaque.
            </p>
            <button onclick="location.href='./project_1.html';">More..</button>
          </div>
          <div className="project">
            <h3>Another Project</h3>
            <img src="./assets/profile-pictures.svg" alt="project " />
            <p>
              This is a short description of another really cool project. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Ea, ab. Atque
              expedita voluptatem autem a tenetur, maiores nisi adipisci
              incidunt reprehenderit aperiam, ullam sequi fugiat necessitatibus
              minus odio quos. Itaque.
            </p>
            <button onclick="location.href='./project_1.html';">More..</button>
          </div>
        </div>
      </section>

      {/* <!-- About section --> */}

      <section className="about scroll-snap">
        {/* <!-- Heading: About --> */}

        <section className="heading" id="about">
          <h2>About</h2>
          <section className="spikes"></section>
        </section>
        <article>
          <h3>~ whoami ~</h3>
          <p>
            Tigran Farmanyan (1993 - present) is an aspiring coder and web
            developer. Tigran is currently enrolled in the DigitalCrafts
            bootcamp for Web Development and has learned a lot in only the first
            couple days. He lives in Austin, Texas with his wife and cat. In
            Tigran's free time, he enjoys all that the Texas hill country has to
            offer -- especially food, nature, and music. Very soon, one may be
            able to hire Tigran for their development team.{" "}
          </p>
          <h3>~ Early Life ~</h3>
          <p>
            Tigran Farmanyan was born in Yerevan, Armenia in 1993. His early
            childhood was split between living with his parents in Armenia and
            spending the summers with his grandparents in a small village
            somewhere in Russia. Near Tigran's eighth birthday, his father found
            work in the United States and the family made the decision to move
            to Texas to escape the terrible repercussions felt in Armenia caused
            by the collapse of the USSR. In a suburb of Dallas, Texas, Tigran
            attended grade school until he graduated high school. During this
            time he trained in the Korean martial art Taekwondo, taking home
            several medals from Junior National tournaments. He would continue
            on to join the UT Collegiate Taekwondo Team during his time at the
            University of Texas.
          </p>
          <h3>~ Education ~</h3>
          <p>
            Tigran Farmanyan attended Clark High School and Plano East Senior
            High School from 2008 until 2012. He graduated with a High School
            Diploma and the International Baccalaureate Diploma in the largest
            graduating className in the country at the time -- almost 1600
            students. The International Baccalaureate program was the first
            place Tigran was introduce to coding. He took the Computer Science
            course where he learned the fundamentals of coding and object
            oriented programming in Java. Doing well in this className and final
            exam, Tigran was inspired to apply to the Computer Science track at
            the University of Texas in Austin where he was accepted to the
            className of 2016. In the year 2012, Tigran moved to Austin to
            attend computer science classNamees at the University of Texas until
            2014. Tigran learned more about programming in classNamees such as
            Computer Architecture, Data Structures, Logic Sets & Functions, and
            Ruby on Rails Programming. Unfortunately in 2014, Tigran had to
            withdraw from school for medical reasons. He would not return to his
            programming education until the pandemic of 2020 when he decided to
            teach himself enough to land a development role. This path would
            lead him to attend the DigitalCrafts online bootcamp in October of
            2022.{" "}
          </p>
          <h3>~ Work ~</h3>
          <p>
            From 2014 until March of 2020, Tigran worked at The Driskill hotel
            -- the oldest and most haunted hotel in Texas. Here he worked as a
            Guest Services Coordinator specializing in valet and bell services.
            For six years, Tigran led the morning valet/bell operations at one
            of the busiest hotels in downtown Austin. He fell in love with the
            work. Every day he met new and interesting people from all over the
            world and drove nice cars. His duties here included managing a team
            of several runners and bellmen in order to ensure hundreds of guest
            would be served in a timely manner, dealing with any guest
            complaints or vehicle damage claims, communicating with the hotel
            management for accurate daily forecasts, and being a friendly smile
            to any hotel guest feeling lonely on their trip to Austin. In this
            role, Tigran learned how to lead a team to success and the value of
            service and hospitality.{" "}
          </p>
        </article>
      </section>

      {/* <!-- Contact Form --> */}

      <section className="scroll-snap">
        {/* <!-- Heading: Contact --> */}

        <section className="heading" id="contact">
          <h2>Contact</h2>
          <section className="spikes"></section>
        </section>
        <div className="contact">
          <form>
            <p>Message Me</p>
            <label for="name">Your Name:</label>
            <input
              type="text"
              name="contact"
              id="name"
              placeholder="Firstname Lastname"
            />
            <label for="email-address">Your E-Mail:</label>
            <input
              type="email"
              name="contact"
              id="email-address"
              placeholder="iHireU@example.com"
            />
            <label for="msg">Your Message:</label>
            <textarea
              rows=""
              cols=""
              name="contact"
              id="msg"
              placeholder="Enter message here..."
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Main;
