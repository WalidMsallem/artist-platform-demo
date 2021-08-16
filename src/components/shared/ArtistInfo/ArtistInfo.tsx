/**
 *
 */
import './artist-info.scss'

import React from 'react'

import {
  Modal,
  Spin,
  Tag,
  Avatar,
  Divider,
  Form,
  Select,
  InputNumber,
  Button,
} from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectLocal,
  selectArtist,
} from '../../../features/selectors/artists.selectors'
import initials from 'initials'
import ColorHash from 'color-hash'

import {
  toggleModal,
  createArtistReport,
} from '../../../features/actions/artists.actions'
import { isEmpty } from 'lodash'

const { Option } = Select
 
function generateArrayOfYears() {
  var max = new Date().getFullYear()
  var min = max - 100
  var years = []

  for (var i = max; i >= min; i--) {
    years.push({ label: i, value: i })
  }
  return years
}

const mounths = [
  { label: 'January', value: 1 },
  { label: 'February', value: 2 },
  { label: 'March', value: 3 },
  { label: 'April', value: 4 },
  { label: 'May', value: 5 },
  { label: 'June', value: 6 },
  { label: 'July', value: 7 },
  { label: 'August', value: 8 },
  { label: 'September', value: 9 },
  { label: 'October', value: 10 },
  { label: 'November', value: 11 },
  { label: 'December', value: 12 },
]


const ArtistInfo = (): JSX.Element => {
  const local = useSelector(selectLocal)
  const { loading, errors } = local

  const { creatingArtist } = errors
  const artist = useSelector(selectArtist)

  const dispatch = useDispatch()

  const colorHash = new ColorHash()

  const isErrorExist = (path) =>
    !isEmpty(creatingArtist) && creatingArtist[path]
  const renderErrorMessage = (path) =>
    !isEmpty(creatingArtist) && creatingArtist[path].message

  const onFinish = (values: any) => {
    dispatch(
      createArtistReport({
        report: values,
        artistId: artist.id,
      }),
    )
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  const renderContent = () => {
    if (loading.gettingArtist) {
      return <Spin spinning />
    }
    if (!isEmpty(artist)) {
      console.log('artist.comma_separated_tags', artist)
      return (
        <div className="content">
          <Avatar
            // size="large"
            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
            style={{ backgroundColor: `${colorHash.hex(artist.name)}` }}
          >
            {initials(artist.name)}
          </Avatar>
          <h2>{artist.name} </h2>
          <div className="desc-item">Location : {artist.location} </div>
          <div className="desc-item">
            {artist.commaSeparatedTags
              .split(',')
              .map((tag: string, index: number) => {
                return <Tag key={index}>{tag} </Tag>
              })}
          </div>
          {console.log('artist.youtube_ur', artist)}
          <div className="social-media-links desc-item'">
            <a href={artist.youtubeUrl} target="_blank" rel="noreferrer">
              <img
                className="img-social"
                src="/artists-managment/youtube.png"
                alt="youtube"
              />
            </a>
            <a href={artist.instagramUrl} target="_blank" rel="noreferrer">
              <img
                className="img-social"
                src="/artists-managment/instagram.svg"
                alt="youtube"
              />
            </a>
            <a href={artist.twitterUrl} target="_blank" rel="noreferrer">
              <img
                className="img-social"
                src="/artists-managment/twitter.png"
                alt="youtube"
              />
            </a>
            <a href={artist.soundcloudUrl} target="_blank" rel="noreferrer">
              <img
                className="img-social"
                src="/artists-managment/soundcloud.png"
                alt="youtube"
              />
            </a>
          </div>

          <Divider orientation="left" plain>
            Create artist report
          </Divider>
          <Form
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            layout="vertical"
          >
            <Form.Item
              label="Start year"
              name="year_start"
              extra={
                isErrorExist('year_start') && (
                  <div className="error-msg">
                    {renderErrorMessage('year_start')}
                  </div>
                )
              }
            >
              <Select
                className={`${isErrorExist('year_start') && 'error-border'}`}
              >
                {generateArrayOfYears().map((el) => {
                  return (
                    <Option value={el.value} key={el.value}>
                      {el.label}{' '}
                    </Option>
                  )
                })}
              </Select>
            </Form.Item>

            <Form.Item
              label="End year"
              name="year_end"
              extra={
                isErrorExist('year_end') && (
                  <div className="error-msg">
                    {renderErrorMessage('year_end')}
                  </div>
                )
              }
            >
              <Select
                className={`${isErrorExist('year_end') && 'error-border'}`}
              >
                {generateArrayOfYears().map((el) => {
                  return (
                    <Option value={el.value} key={el.value}>
                      {el.label}{' '}
                    </Option>
                  )
                })}
              </Select>
            </Form.Item>

            <Form.Item
              label="Start month"
              name="month_span_start"
              extra={
                isErrorExist('month_span_start') && (
                  <div className="error-msg">
                    {renderErrorMessage('month_span_start')}
                  </div>
                )
              }
            >
              <Select
                className={`${
                  isErrorExist('month_span_start') && 'error-border'
                }`}
              >
                {mounths.map((el) => {
                  return (
                    <Option value={el.value} key={el.value}>
                      {el.label}{' '}
                    </Option>
                  )
                })}
              </Select>
            </Form.Item>

            <Form.Item
              label="End mounth"
              name="month_span_end"
              extra={
                isErrorExist('month_span_end') && (
                  <div className="error-msg">
                    {renderErrorMessage('month_span_end')}
                  </div>
                )
              }
            >
              <Select
                className={`${
                  isErrorExist('month_span_end') && 'error-border'
                }`}
              >
                {mounths.map((el) => {
                  return (
                    <Option value={el.value} key={el.value}>
                      {el.label}{' '}
                    </Option>
                  )
                })}
              </Select>
            </Form.Item>

            <Form.Item
              label="Gross"
              name="gross"
              extra={
                isErrorExist('gross') && (
                  <div className="error-msg">{renderErrorMessage('gross')}</div>
                )
              }
            >
              <InputNumber
                className={`${isErrorExist('gross') && 'error-border'}`}
              />
            </Form.Item>

            <Form.Item
              label="Net"
              name="net"
              extra={
                isErrorExist('net') && (
                  <div className="error-msg">{renderErrorMessage('net')}</div>
                )
              }
            >
              <InputNumber
                className={`${isErrorExist('net') && 'error-border'}`}
              />
            </Form.Item>

            <Form.Item>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Button
                  type="primary"
                  htmlType="submit"
                  loading={loading.creatingArtist}
                  className="button"
                >
                  Submit
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>
      )
    }
  }
  return (
    <Modal
      title="Artist details"
      visible={local.artistInfoModal}
      onCancel={() => dispatch(toggleModal(false))}
      closable
      footer={false}
      className="artist-details"
      width={500}
    >
      {renderContent()}
    </Modal>
  )
}


export default ArtistInfo
