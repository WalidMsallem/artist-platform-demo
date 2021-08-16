/**
 * artists services
 */

/* eslint-disable no-throw-literal */
import axios from 'axios'
import { requestHeader } from '../../utils/requestHeader'
import URL from '../constants/services.constants'
import {
  searchArtistsPayload,
  createArtistsPayload,
  getArtistByIdPayload,
  createArtistReportPayload,
} from '../types/artists.types'

export const searchArtists = async (
  body: searchArtistsPayload,
): Promise<any> => {
  const result = await axios.get(
    URL.baseApiUrl() + URL.artists.search(body.search),
    requestHeader({}),
  )
  return result.data
}

export const createArtist = async (
  body: createArtistsPayload,
): Promise<any> => {
  const result = await axios.post(
    URL.baseApiUrl() + URL.artists.create,
    body,
    requestHeader({}),
  )
  return result.data
}
export const getArtistById = async (
  body: getArtistByIdPayload,
): Promise<any> => {
  const result = await axios.get(
    URL.baseApiUrl() + URL.artists.getById(body.id),
    requestHeader({}),
  )
  return result.data
}
export const createArtistReport = async (
  body: createArtistReportPayload,
): Promise<any> => {
  const result = await axios.post(
    URL.baseApiUrl() + URL.artists.createReport(body.artistId),
    body.report,
    requestHeader({}),
  )
  return result.data
}
