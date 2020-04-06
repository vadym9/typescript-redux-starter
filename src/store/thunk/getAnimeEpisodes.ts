import { AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { getEpisodesSuccess, getEpisodesFail, getEpisodes } from '../actions';
import { Episode } from '../../global-models';

const requestEpisodes = () => fetch('https://api.jikan.moe/v3/anime/1/episodes');

export const getAnimeEpisodes = (): ThunkAction<Promise<void>, {}, {}, AnyAction> =>
  async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    dispatch(getEpisodes())
    try {
      const result = await requestEpisodes();
      const json: { episodes: Episode[] } = await result.json();
      dispatch(getEpisodesSuccess(json.episodes));
    } catch (e) {
      dispatch(getEpisodesFail());
    }
  };