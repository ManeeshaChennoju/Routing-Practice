import './index.css'

const NotFound = () => {
  const NotFoundImgUrl =
    'https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png'

  return (
    <div className="NotFound_container">
      <img src={NotFoundImgUrl} alt="not found" className="NotFoundImage" />
      <h1 className="heading">Not Found</h1>
    </div>
  )
}

export default NotFound
