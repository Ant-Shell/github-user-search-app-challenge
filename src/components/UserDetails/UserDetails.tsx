import placeholder from  '/src/assets/react.svg'
import '/src/components/UserDetails/UserDetails.scss'

const UserDetails = () => {
  return (
    <section className='user-details'>
      <header className='user-details-header'>
        <div className='user-details-image-container'>
          <img className='user-details-image' src={placeholder} alt='User'/>
        </div>
        <div className='user-details-overview-container'>
          <p>Placeholder text</p>
          <p>@placholder</p>
          <p>Joined 01 Jan 2011</p>
        </div>
      </header>
      <section className='user-details-bio-section'>
        <p>
          Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit. Donec
          odio. Quisque volutpat mattis eros.
        </p>
      </section>
      <section className='user-details-info-section'>
        <p>Repos</p>
        <p>Followers</p>
        <p>Following</p>
      </section>
      <section className='user-details-socials-section'>
        <div>
          <p>San Francisco</p>
        </div>
        <div>
          <p>https://github.blog</p>
        </div>
        <div>
          <p>Not Available</p>
        </div>
        <div>
          <p>@github</p>
        </div>
      </section>
    </section>
  )
}

export default UserDetails