/**
 *
 * AddArtistDrawer
 *
 */
import './add-artist-drawer.scss'

import React from 'react'
import PropTypes from 'prop-types'
import { Drawer, Form, Input, Button, Select } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { createArtist } from '../../../features/actions/artists.actions'
import { selectLocal } from '../../../features/selectors/artists.selectors'
import { isEmpty } from 'lodash'

type Props = {
  visible :boolean
   onClose : Function
}

function AddArtistDrawer({ visible, onClose }:Props): JSX.Element {
  const dispatch = useDispatch()

  const local = useSelector(selectLocal)
  const { loading, errors } = local

  const { creatingArtist } = errors

  const onFinish = (values: any) => {
    const { comma_separated_tags } = values
    dispatch(
      createArtist({
        ...values,
        comma_separated_tags: comma_separated_tags
          ? comma_separated_tags.join(',')
          : '',
      }),
    )
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }
  const isErrorExist = (path) =>
    !isEmpty(creatingArtist) && creatingArtist[path]
  const renderErrorMessage = (path) =>
    !isEmpty(creatingArtist) && creatingArtist[path].message
  return (
    <div className="add-artist-drawer">
      <Drawer
        title="Create New Artist"
        placement="right"
        width={400}
        closable={false}
        onClose={onClose}
        visible={visible}
        className="add-artist-drawer"
      >
        <Form
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
        >
          <Form.Item
            label="Name"
            name="name"
            extra={
              isErrorExist('name') && (
                <div className="error-msg">{renderErrorMessage('name')}</div>
              )
            }
          >
            <Input className={`${isErrorExist('name') && 'error-border'}`} />
          </Form.Item>

          <Form.Item
            label="Location"
            name="location"
            extra={
              isErrorExist('location') && (
                <div className="error-msg">
                  {renderErrorMessage('location')}
                </div>
              )
            }
          >
            <Input
              className={`${isErrorExist('location') && 'error-border'}`}
            />
          </Form.Item>

          <Form.Item
            label="Tags"
            name="comma_separated_tags"
            extra={
              isErrorExist('comma_separated_tags') && (
                <div className="error-msg">
                  {renderErrorMessage('comma_separated_tags')}
                </div>
              )
            }
          >
            <Select
              mode="tags"
              tokenSeparators={[',']}
              className={`${
                isErrorExist('comma_separated_tags') && 'error-border'
              }`}
            />
          </Form.Item>

          <Form.Item
            label="Own review"
            name="own_review"
            extra={
              isErrorExist('own_review') && (
                <div className="error-msg">
                  {renderErrorMessage('own_review')}
                </div>
              )
            }
          >
            <Input
              className={`${isErrorExist('own_review') && 'error-border'}`}
            />
          </Form.Item>
          <Form.Item
            label="Youtube url"
            name="youtube_url"
            extra={
              isErrorExist('youtube_url') && (
                <div className="error-msg">
                  {renderErrorMessage('youtube_url')}
                </div>
              )
            }
          >
            <Input
              className={`${isErrorExist('youtube_url') && 'error-border'}`}
            />
          </Form.Item>
          <Form.Item
            label="Twitter url"
            name="twitter_url"
            extra={
              isErrorExist('twitter_url') && (
                <div className="error-msg">
                  {renderErrorMessage('twitter_url')}
                </div>
              )
            }
          >
            <Input
              className={`${isErrorExist('twitter_url') && 'error-border'}`}
            />
          </Form.Item>
          <Form.Item
            label="Instagram url"
            name="instagram_url"
            extra={
              isErrorExist('instagram_url') && (
                <div className="error-msg">
                  {renderErrorMessage('instagram_url')}
                </div>
              )
            }
          >
            <Input
              className={`${isErrorExist('instagram_url') && 'error-border'}`}
            />
          </Form.Item>
          <Form.Item
            label="Soundcloud url"
            name="soundcloud_url"
            extra={
              isErrorExist('soundcloud_url') && (
                <div className="error-msg">
                  {renderErrorMessage('soundcloud_url')}
                </div>
              )
            }
          >
            <Input
              className={`${isErrorExist('soundcloud_url') && 'error-border'}`}
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
                htmlType="reset"
                className="button button-cancel"
                onClick={onClose}
              >
                Cancel
              </Button>
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
      </Drawer>
    </div>
  )
}

AddArtistDrawer.propTypes = {
  visible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default AddArtistDrawer
