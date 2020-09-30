import React from 'react';

const ProfileTop = ({
  profile: {
    nationality,
    gender,
    location,
    dateOfBirth,
    social,
    user: { name, avatar }
  }
}) => {
  return (
    <div className='profile-top bg-primary p-2'>
      <img className='round-img my-1' src={avatar} alt='' />
      <h1 className=''>{name}</h1>
      <p className='lead'>
        {nationality && <span>{nationality}</span>}
      </p>
      <p className='lead'>
        {gender && <span> {gender}</span>}
      </p>
      <p className='lead'>
        {dateOfBirth && <span>  {dateOfBirth}</span>}
      </p>
      <p>{location && <span>{location}</span>}</p>
      <div className='icons my-1'>
        {social && social.twitter && (
          <a href={social.twitter} target='_blank' rel='noopener noreferrer'>
            <i className='fa fa-twitter fa-2x' />
          </a>
        )}
        {social && social.facebook && (
          <a href={social.facebook} target='_blank' rel='noopener noreferrer'>
            <i className='fa fa-facebook fa-2x' />
          </a>
        )}
        
        {social && social.youtube && (
          <a href={social.youtube} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-youtube fa-2x' />
          </a>
        )}
        {social && social.instagram && (
          <a href={social.instagram} target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-instagram fa-2x' />
          </a>
        )}
      </div>
    </div>
  );
};


export default ProfileTop;