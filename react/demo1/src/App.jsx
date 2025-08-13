import { useState } from 'react'
import './App.css'
import Nav from './components/nav'

function App() {

  return (
    <>
      <Nav />
      <header>
        <section class="hero" id="home">
            <div class="hero-content">
                <h1 class="hero-title">I'm Rayan Adirdard <span>Front-end</span> Developer</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.</p>
                <div class="hire-me">Hire Me <i class="fas fa-arrow-right"></i></div>
            </div>
            <div class="hero-image">
                <img src="/frontend_home_assistant/lady_pc.png" alt="Hero Image"/>
            </div>
        </section>
      </header>

      <section class="projects" id="projects">
        <div class="description">
            <h2>Projects</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p>
        </div>
        <div class="row row1">
            <div class="project-card">
                <img src="/frontend_home_assistant/project1.png" alt="How to make Flyer Design"/>
                <div>
                    <div class="group">
                        <h3>How to make Flyer Design</h3>
                        <p>Lorem ipsum dolor sit amet, conse adipliscing elit awd and lorem ipsum...</p>
                    </div>
                    <div class="chips">
                        <div class="chip">Typescript</div>
                        <div class="chip">ReactJs</div>
                        <div class="chip">NextJs</div>
                        <div class="chip">CSS</div>
                        <div class="chip">HTML</div>
                        <div class="chip">MongoDB</div>
                    </div>
                </div>
            </div>
            <div class="project-card">
                <img src="/frontend_home_assistant/project2.png" alt="How to make Flyer Design"/>
                <div>
                    <div class="group">
                        <h3>How to make Flyer Design</h3>
                        <p>Lorem ipsum dolor sit amet, conse adipliscing elit awd and lorem ipsum...</p>
                    </div>
                    <div>
                        <div class="chip">Typescript</div>
                        <div class="chip">ReactJs</div>
                        <div class="chip">NextJs</div>
                    </div>
                </div>
            </div>
            <div class="project-card">
                <img src="/frontend_home_assistant/project3.png" alt="How to make Flyer Design"/>
                <div>
                    <div class="group">
                        <h3>How to make Flyer Design</h3>
                        <p>Lorem ipsum dolor sit amet, conse adipliscing elit awd and lorem ipsum...</p>
                    </div>
                    <div>
                        <div class="chip">Typescript</div>
                        <div class="chip">ReactJs</div>
                        <div class="chip">NextJs</div>
                        <div class="chip">CSS</div>
                        <div class="chip">HTML</div>
                        <div class="chip">MongoDB</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row row2">
            <div class="project-card">
                <img src="/frontend_home_assistant/project4.png" alt="How to make Flyer Design"/>
                <div>
                    <div class="group">
                        <h3>How to make Flyer Design</h3>
                        <p>Lorem ipsum dolor sit amet, conse adipliscing elit awd and lorem ipsum...</p>
                    </div>
                    <div>
                        <div class="chip">Typescript</div>
                        <div class="chip">ReactJs</div>
                        <div class="chip">NextJs</div>
                        <div class="chip">CSS</div>
                        <div class="chip">HTML</div>
                        <div class="chip">MongoDB</div>
                    </div>
                </div>
            </div>
            <div class="project-card">
                <img src="/frontend_home_assistant/project1.png" alt="How to make Flyer Design"/>
                <div>
                    <div class="group">
                        <h3>How to make Flyer Design</h3>
                        <p>Lorem ipsum dolor sit amet, conse adipliscing elit awd and lorem ipsum...</p>
                    </div>
                    <div>
                        <div class="chip">Typescript</div>
                        <div class="chip">ReactJs</div>
                        <div class="chip">NextJs</div>
                        <div class="chip">CSS</div>
                        <div class="chip">HTML</div>
                        <div class="chip">MongoDB</div>
                    </div>
                </div>
            </div>
            <div class="project-card">
                <img src="/frontend_home_assistant/project6.png" alt="How to make Flyer Design"/>
                <div>
                    <div class="group">
                        <h3>How to make Flyer Design</h3>
                        <p>Lorem ipsum dolor sit amet, conse adipliscing elit awd and lorem ipsum...</p>
                    </div>
                    <div>
                        <div class="chip">Typescript</div>
                        <div class="chip">ReactJs</div>
                        <div class="chip">NextJs</div>
                        <div class="chip">CSS</div>
                        <div class="chip">HTML</div>
                        <div class="chip">MongoDB</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="Recommendations" id="recommendations">
        <div class="description">
            <h2>Recommendations</h2>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p>
        </div>
        <div class="carousel">
            <div class="carousel-card card2">
                <div class="rating">⭐⭐⭐⭐⭐</div>
                <h2>Amazing work</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....</p>
                <img src="/frontend_home_assistant/recommendation2.png" alt="black and white image of a person"/>
                <div class="author">
                    <h3>James Gouse</h3>
                    <p>Graphic Designer</p>
                </div>
            </div>
            <div class="carousel-card card1">
                <div class="rating">⭐⭐⭐⭐⭐</div>
                <h2>Great Quality</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....</p>
                <img src="/frontend_home_assistant/recommendation1.png" alt="black and white image of a person"/>
                <div class="author">
                    <h3>James Gouse</h3>
                    <p>Graphic Designer</p>
                </div>
            </div>
            <div class="carousel-card card2">
                <div class="rating">⭐⭐⭐⭐⭐</div>
                <h2>Amazing work</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....</p>
                <img src="/frontend_home_assistant/recommendation2.png" alt="black and white image of a person"/>
                <div class="author">
                    <h3>James Gouse</h3>
                    <p>Graphic Designer</p>
                </div>
            </div>
            <div class="carousel-card card3">
                <div class="rating">⭐⭐⭐⭐⭐</div>
                <h2>Great Quality</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....</p>
                <img src="/frontend_home_assistant/recommendation3.png" alt="black and white image of a person"/>
                <div class="author">
                    <h3>James Gouse</h3>
                    <p>Graphic Designer</p>
                </div>
            </div>            
            <div class="carousel-card card1">
                <div class="rating">⭐⭐⭐⭐⭐</div>
                <h2>Amazing work</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. Morbi donec amet....</p>
                <img src="/frontend_home_assistant/recommendation1.png" alt="black and white image of a person"/>
                <div class="author">
                    <h3>James Gouse</h3>
                    <p>Graphic Designer</p>
                </div>
            </div>
        </div>
        <div class="navs">
            <button class="prev">Previous</button>
            <button class="next">Next</button>
        </div>
    </section>

    <section class="contact" id="contact">
        <aside class="leave-your-info">
            <h2>Leave ME Your Info</h2>
            <form action="#" method="post">
                <label for="name">Your Full Name (Required)</label>
                <input type="text" name="name" required/>
                <label for="email">Your Email (Required)</label>
                <input type="email" name="email" required/>
                <label for="subject">Subject</label>
                <input type="text" name="subject" required/>
                <label for="message">Your Message</label>
                <textarea name="message" rows="5" required></textarea>
                <button type="submit" class="send-message">Send Message</button>
            </form>
        </aside>
        <aside class="contact-info">
            <h2>Contact Information</h2>
            <div class="info">
                <div class="info-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <p>Country: <span>Bangladesh</span></p>
                    <p>City: <span>Dhaka</span></p>
                    <p>Street: <span>35 Vhatara, Badda</span></p>
                </div>
                <div class="info-item">
                    <i class="fas fa-envelope"></i>
                    <p>Email: <span>Youremail@Gmail.com</span></p>
                    <p>Skype: <span>@yourusername</span></p>
                    <p>Telegram: <span>@yourusername</span></p>
                </div>
                <div class="info-item">
                    <i class="fas fa-phone"></i>
                    <p>Support Services: <span>15369</span></p>
                    <p>Office: <span>+58 (021)356 587 235</span></p>
                    <p>Personal: <span>+58 (021)356 587 235</span></p>
                </div>
            </div>
        </aside>
    </section>

    <footer>
        <div class="footer-logo">
            <img src="/frontend_home_assistant/generate.png" alt="logo1"/>
            <img src="/frontend_home_assistant/generate2.png" alt="logo2"/>
            <img src="/frontend_home_assistant/generate3.png" alt="logo3"/>
            <img src="/frontend_home_assistant/generate4.png" alt="logo4"/>
        </div>
        <div>
            <div class="nav-logo"></div>
            <div>
                <div class="logos">
                    <img src="/frontend_home_assistant/upwork.png" alt="upwork"/>
                    <img src="/frontend_home_assistant/dribble.png" alt="dribble"/>
                    <img src="/frontend_home_assistant/fiverr.png" alt="fiverr"/>
                </div>
                <div class="links">
                    <div class="quick-links">
                        <h3 class="links-header">Quick Links</h3>
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#skills">About</a></li>
                            <li><a href="#education">Education</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#recommendations">Recommendations</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                    <div class="portfolio-links">
                        <h3 class="links-header">Portfolio</h3>
                        <ul>
                            <li><a href="#frontend-development">Frontend Development</a></li>
                            <li><a href="#backend-development">Backend Development</a></li>
                            <li><a href="#website-design">Website Design</a></li>
                            <li><a href="#machine-learning">Machine Learning</a></li>
                            <li><a href="#problem-solving">Problem Solving & DSA</a></li>

                        </ul>
                    </div>
                    {/* <div class="connect-links">
                        <h3 class="links-header">Connect</h3>
                        <ul>
                            <li>
                                <i class="fab fa-linkedin"></i>
                                <a href="#linkedin">LinkedIn</a>
                            </li>
                            <li>
                                <i class="fab fa-instagram"></i>
                                <a href="#instagram">Instagram</a>
                            </li>
                            <li>
                                <i class="fab fa-facebook"></i>
                                <a href="#facebook">Facebook</a>
                            </li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </div>
        <p>&copy; 2024 Copyright. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
