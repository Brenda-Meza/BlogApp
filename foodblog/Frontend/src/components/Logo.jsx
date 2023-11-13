import logoImage from '/src/assets/logo.png'

export default function Logo() {
    return(
      <div className='content'>
        <img
          src={logoImage}
          alt="Your Logo"
          height="250"
          className="NavImg"
          id="logoImg"
        />
      </div>
    )
}