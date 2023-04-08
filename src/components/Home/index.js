import './index.css'

const Home = () => {
  const homeImgUrl =
    'https://assets.ccbp.in/frontend/react-js/home-blog-img.png'

  return (
    <div className="home_container">
      <img src={homeImgUrl} alt="home" className="homeImage" />
      <h1 className="heading">Home</h1>
    </div>
  )
}

export default Home
