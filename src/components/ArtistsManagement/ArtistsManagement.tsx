/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import './artists-management.scss'

import React, { useState } from 'react'
import {
  selectLocal,
  selectSearchResult,
} from '../../features/selectors/artists.selectors'

import { Input,  Button, Spin } from 'antd'
import { isEmpty } from 'lodash'
import ArtistCard from '../shared/ArtistCard'
import AddArtistDrawer from '../shared/AddArtistDrawer'
import ArtistInfo from '../shared/ArtistInfo'
import {
  searchArtists,
  toggleDrawer,
} from '../../features/actions/artists.actions'
import { useDispatch, useSelector } from 'react-redux'

const ArtistsManagement = (): JSX.Element => {
  const [searchValue, setsearchValue] = useState()
  const [isSearching, setIsSearching] = useState(false)

  const dispatch = useDispatch()

  const local = useSelector(selectLocal)
  const searchResult = useSelector(selectSearchResult)
  const { drawerAddArtist } = local

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      dispatch(searchArtists({ search: searchValue }))
      setIsSearching(true)
    }
  }

  const handleClose = () => {
    setIsSearching(false)
    setsearchValue('')
  }

  return (
    <div className="artists-management">
      <div className="input-container">
        <Input
          size="large"
          placeholder="Search Artist"
          onKeyDown={handleSearch}
          className={searchValue === '' ? '' : 'border-red'}
          suffix={
            <div className="input-suffix">
              <img
                src="/artists-managment/close.png"
                alt="close"
                className="input-icon icon"
                onClick={handleClose}
              />
              <img src="/artists-managment/line.png" className="icon" />
              <img
                src="/artists-managment/search.png"
                className="icon-search"
                onClick={handleSearch}
              />
            </div>
          }
          onChange={(e) => setsearchValue(e.target.value)}
          value={searchValue}
        />
      </div>

      {!isSearching ? (
        <>
          <div className="arrow-container">
            <img
              src="/artists-managment/up-arrow.png"
              alt="up-arrow"
              className="arrow"
            />
          </div>
          <div className="empty-search-list-container">
            <img
              src="/artists-managment/empty-search.png"
              alt="empty-page"
              className="empty-search-image"
            />
          </div>
        </>
      ) : (
        <div className="search-list-container">
          <div className="title-container">
            <div className="title">
              <span className="title-header"> Current artist </span>
            </div>
          </div>
          <Spin spinning={local.loading.searchArtists}>
            {!isEmpty(searchResult) &&
              searchResult.map((artist) => {
                return (
                  <ArtistCard
                    key={`${artist.id}`}
                    id={`${artist.id}`}
                    name={artist.name}
                    location={artist.location}
                    tags={artist.commaSeparatedTags.split(',')}
                    // link={`/artists-details/${artist.id}`}
                    youtubeUrl={artist.youtubeUrl}
                  />
                )
              })}
          </Spin>
        </div>
      )}
      <div className="add-artist-button">
        <Button
          onClick={() => {
            dispatch(toggleDrawer(!drawerAddArtist))
          }}
          icon={<img src="/artists-managment/add.png" alt="add-artist" />}
        >
          <span>Add New Artist</span>
        </Button>
      </div>
      <AddArtistDrawer
        visible={drawerAddArtist}
        onClose={() => {
          dispatch(toggleDrawer(false))
        }}
      />
      <ArtistInfo />
    </div>
  )
}

export default ArtistsManagement
