/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import './artist-card.scss'

import React from 'react'
// import PropTypes from 'prop-types';
// import { FormattedMessage } from 'react-intl'
import { Tag, Avatar, Card } from 'antd'
// import phoneIcon from '/artist-management/phone.png'
import initials from 'initials'
import ColorHash from 'color-hash'
import { useDispatch } from 'react-redux'
import {
  getArtistById,
  toggleModal,
} from '../../../features/actions/artists.actions'
import PropTypes from 'prop-types'
// import messages from './messages'

type Props = {
  name: string
  tags: []
  location: string
  youtubeUrl: string
  id: string
}

function ArtistCard({
  name,
  tags,
  location,
  youtubeUrl,
  id,
}: Props): JSX.Element {
  const colorHash = new ColorHash()

  const dispatch = useDispatch()

  const description = (
    <div>
      <div className="name-container">
        {name}
        <div className="location-container">
          <span className="">
            <img src="/artists-managment/location.png" alt="location icon" />{' '}
            {location}
          </span>
        </div>
      </div>
      <a href={youtubeUrl} target="_blank" rel="noreferrer">
        <img
          className="img-youtube"
          src="/artists-managment/youtube.png"
          alt="youtube"
        />
        <span> link to youtube </span>
      </a>
      <div className="tags-container">
        {tags.map((tag: string, index: number) => {
          if (index > 2) return
          return <Tag key={index}>{tag} </Tag>
        })}
      </div>
    </div>
  )

  return (
    <Card
      actions={[
        <div
          key="details"
          onClick={() => {
            dispatch(getArtistById(id))
            dispatch(toggleModal(true))
          }}
        >
          Details + add report
        </div>,
      ]}
    >
      <Card.Meta
        avatar={
          <Avatar
            size="large"
            shape="square"
            style={{ backgroundColor: `${colorHash.hex(name)}` }}
          >
            {initials(name)}
          </Avatar>
        }
        title={name}
        description={description}
      />
    </Card>
  )
}

ArtistCard.propTypes = {
  name: PropTypes.string.isRequired,
  youtubeUrl: PropTypes.string,
  address: PropTypes.object,
  tags: PropTypes.array.isRequired,
  key: PropTypes.string.isRequired,
}

export default ArtistCard
