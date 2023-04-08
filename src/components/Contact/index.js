import './index.css'

const Contact = () => {
  const ContactImgUrl =
    'https://assets.ccbp.in/frontend/react-js/contact-blog-img.png'

  return (
    <div className="Contact_container">
      <img src={ContactImgUrl} alt="contact" className="ContactImage" />
      <h1 className="heading">Contact</h1>
    </div>
  )
}

export default Contact
