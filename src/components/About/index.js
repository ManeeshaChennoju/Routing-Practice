import './index.css'

const About = () => {
  const aboutImgUrl =
    'https://assets.ccbp.in/frontend/react-js/about-blog-img.png'

  return (
    <div className="about_container">
      <img src={aboutImgUrl} alt="about" className="aboutImage" />
      <h1 className="heading">About</h1>
      <p className="para">I love to create! I am a frontend web developer</p>
    </div>
  )
}

export default About
