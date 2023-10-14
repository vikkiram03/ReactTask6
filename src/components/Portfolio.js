
const Portfolio = () => {
    return (
        <div>
            <h1 className="display-1 text-center">React Task 6</h1>
            <h6 className="display-6 text-center">By 21BCE5919 Vikram Ramkumar</h6> <br/><br/>
            <div className="m-2 mx-5">
                <header>
                    <h1 className="display-1 text-center"> My Portfolio </h1>
                    <ul class="nav justify-content-end">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#about">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#projects">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </header>
                <main>
                    <section id="about">
                        <h2 className="display-5"> About Me </h2>
                        <p className="text">I am a web developer with a passion for building beautiful and functional websites. I have experience with a variety of technologies, including React, HTML, CSS, and Javascript.</p>
                    </section> <br/>
                    <section id="projects">
                        <h2 className="display-5"> Projects </h2>
                        <div className="text">
                            <h4 className="display-6"><small>Google Solution Challenge - Front end project</small></h4>
                            <p className="text">
                                Developed a website aimed at raising awareness about Climate Change as part of the Google Solution Challenge <br/>
                            </p>
                            <p>
                                URL:
                                <a href="https://github.com/vikkiram03/Google-Solution-Challenge---Climate-Change" target="_blank"> Github </a> | 
                                <a href="https://www.youtube.com/watch?v=SanlBH0Zxw0" target="_blank"> Youtube </a>
                            </p>
                        </div>
                    </section> <br/>
                    <section id="contact">
                        <h2 className="display-5">Contact</h2>
                        <p>
                            Phone: +91 9664580498 <br/>
                            Email: <a href="vikkiram03@gmail.com"> vikkiram03@gmail.com </a>  | <a href="vikramramkumar.r2021@vitstudent.ac.in"> vikramramkumar.r2021@vitstudent.ac.in </a> <br/>
                            LinkedIn: <a href="https://www.linkedin.com/in/vikram-ramkumar-257397250/" target="_blank"> Vikram Ramkumar </a>
                        </p>
                    </section>
                </main> <br/><br/>
                <footer className="text-center">
                    <p>Copyright &copy; 2023 Vikram Ramkumar</p>
                </footer>
            </div>
        </div>
    )
}

export default Portfolio;