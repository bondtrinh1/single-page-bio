import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li>Home</li>
            <li>About Me</li>
            <li>Projects</li>
          </ul>
        </nav>
      </header>
      <div class="App-main">
        <section id="profile">
          <div class="card-profile">
            <img src="/icon.png" alt="Avatar"/>
            <div class="container-profile">
                <h1><b>Bond Trinh</b></h1>
                <p>Student at Auckland University of Technology</p><br />
            </div>
          </div>
          {/* <img src="/icon.png" height="200" alt="Profile picture icon"/>
          <h1>Bond Trinh</h1><br/>
          <small id="profile-subtitle">Student at Auckland
          University of Technology<br/>
          Software Development major
          </small> */}
        </section>
        {/* <div id="icons">
              <img 
                class="github" 
                src="/github.svg" 
                alt="GitHub logo" 
                width={26}
                />
              <img 
                class="linkedin" 
                src="/linkedin.svg" 
                alt="Linkedin logo"
                width={26}
              />
          </div> */}
        <section id="about">
          <h2 class="about-subtitle">About</h2>
            {/* <p><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet fuga, deserunt ipsa impedit cum sequi beatae non pariatur corporis recusandae nemo perspiciatis nostrum. Cupiditate fugiat quae natus voluptatibus. Architecto, est.</span><span>Explicabo hic asperiores laboriosam rerum. Ipsam, nesciunt maxime iste impedit ratione quidem ipsa et animi reprehenderit minus placeat consectetur ab neque ex similique quas dignissimos non eum dolore eveniet rem!</span><span>Ducimus, tempora! Labore repudiandae doloremque dolor itaque dicta tempora, molestiae incidunt repellendus, voluptate nam veritatis asperiores quisquam consequatur nulla. Excepturi, nesciunt expedita! Eius, ullam quis quidem neque tenetur dolore labore.</span><span>Doloribus necessitatibus voluptatem laudantium veniam soluta voluptatum totam? Adipisci error amet accusantium a! Nihil delectus commodi placeat sint omnis id exercitationem blanditiis, ullam rem ipsa veniam ad recusandae. Sint, quod.</span><span>Velit, facere ut et fuga quae quis laborum quisquam ipsam saepe veniam cum molestiae unde placeat doloribus neque? Fuga aperiam doloremque earum, dolore ducimus consequatur modi atque totam nostrum! Amet?</span><span>Accusamus quasi odio velit repellat veniam, amet earum necessitatibus cupiditate quaerat mollitia suscipit dicta possimus nulla, fuga ab esse aspernatur distinctio minus? Nesciunt, quisquam! Nihil tempora dolorem corporis accusamus quidem?</span><span>Fugit vitae accusamus impedit similique, natus tenetur laborum et eveniet dignissimos esse distinctio dolorem sed aliquid fuga quod id perspiciatis corporis, ea, quaerat nobis iusto. Distinctio neque laborum explicabo unde!</span><span>Doloremque nobis aliquid ullam dolor? Aut ullam omnis, ut maxime harum praesentium recusandae labore repellat, dolorum aliquam beatae distinctio. Corporis reiciendis cumque iste minima suscipit perspiciatis ipsa cum quisquam qui.</span><span>Necessitatibus, commodi repellat veniam aliquam odit fugit illum provident laudantium pariatur dolore dolores a, error veritatis obcaecati accusamus sed ut debitis corporis at rerum consequuntur doloremque id. Aspernatur, velit facilis!</span><span>Possimus alias aliquid vero laudantium delectus nisi quia, velit et distinctio, autem veritatis at quos. Totam, nihil voluptatibus. Libero nesciunt illo, fugit quibusdam alias totam velit ex quo sed repudiandae?</span></p> */}
          <p>Hi, my name is Bond. I am a student in my final year at Auckland University of Technology studying a Bachelors degree in Computer and Information Sciences where
            my major is Software Development.
          </p>
        </section>
        <section id="bio">
          <h2 class="bio-subtitle">Bio</h2>
          <ul class="bio-ul">
          <li><strong>2000</strong>&nbsp; Born in Auckland, New Zealand</li>
          <li><strong>2012 - 2014</strong>&nbsp; Studied at Papatoetoe Intermediate School</li>
          <li><strong>2014 - 2018</strong>&nbsp; Studied at Papatoetoe High School</li>
            <li><strong>2019 - 2019</strong>&nbsp; Completed a Certificate in Science and Technology at AUT</li>
            <li><strong>2020 - 2023</strong>&nbsp; Completed a Bachelor of Computer and Information Sciences at AUT</li>
          </ul>
        </section>
        <section id="hobbies">
          {/* <h2 class="hobbies-subtitle">Hobbies</h2> */}
          <h2 class="hobbies-subtitle">Skills &amp; Interests</h2>
          {/* <ul class="hobbies-ul">
            <li class="programming">
              <img src="code-square.svg" width="22"/>
                <small>Programming</small>
            </li>
            <li class="music">
              <img src="music-note.svg" width="22"/>
                <small>Music</small>
              </li>
              <li class="gaming">
                <img src="controller.svg" width="22"/>
                  <small>Gaming</small>
                </li>
              </ul> */}
                <ul id="skills-interests">
                  <li><strong>Skills</strong></li>
                  <li>Java</li>
                  <li>C</li>
                  <li>C#</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>React / React Native</li>
                </ul>
                {/* <p><strong>Skills</strong>&nbsp; Java, C, C#, HTML, CSS, JavaScript, React, React Native</p> */}
                <p><strong>Interests</strong>&nbsp; Programming, Music, Gaming</p>
        </section>
        <section id="projects">
          <h2 class="projects-subtitle">Projects</h2>
          <div class="row">
            <div class="col-sm-6">
              <div class="card">
                <img src="/icon.png" alt="Avatar" width="200"/>
                <div class="container">
                    <h4><b>Portfolio Website</b></h4>
                    <p>An application built using multiple technologies maintained by GitHub.</p><br />
                    <ul>
                      <li>React</li>
                      <li>HTML</li>
                      <li>JavaScript</li>
                      <li>CSS</li>
                      <li>Material-UI</li>
                      <li>GitHub</li>
                    </ul>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <img src="/icon.png" alt="Avatar" width="200"/>
                <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Architect and Engineer</p>
                </div>
              </div>
            </div>
            <div class="col-sm-6">
              <div class="card">
                <img src="/icon.png" alt="Avatar" width="200"/>
                <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Architect and Engineer</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer>
        <p>Designed and built by Bond Trinh (2022)</p>
      </footer>
    </div>
  );
}

export default App;
