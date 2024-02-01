import placeholder from  '/src/assets/react.svg'
import locationIcon from '/src/assets/icon-location.svg'
import linkIcon from '/src/assets/icon-website.svg'
import twitterIcon from '/src/assets/icon-twitter.svg'
import companyIcon from '/src/assets/icon-company.svg'
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
        <div className='user-details-info-container'>
          <p>Repos</p>
          <p>8</p>
        </div>
        <div className='user-details-info-container'>
          <p>Followers</p>
          <p>3938</p>
        </div>
        <div className='user-details-info-container'>
         <p>Following</p>
         <p>9</p>
        </div>
      </section>
      <section className='user-details-socials-section'>
        <div className='user-details-socials-container'>
          <img className='user-details-location-image' src={locationIcon} alt='Location'/>
          <p>San Francisco</p>
        </div>
        <div className='user-details-socials-container'>
          <img className='user-details-link-image' src={linkIcon} alt='Link'/>
          <p>https://github.blog</p>
        </div>
        <div className='user-details-socials-container'>
          <img className='user-details-twitter-image' src={twitterIcon} alt='Twitter'/>
          <p>Not Available</p>
        </div>
        <div className='user-details-socials-container'>
          <img className='user-details-company-image' src={companyIcon} alt='Company'/>
          <p>@github</p>
        </div>
      </section>
    </section>
  )
}

export default UserDetails