import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_URL} from '../../constants';
import { IAllCharacters, ICharacter } from "../../interfaces";

export const charactersApi = createApi({
	reducerPath: 'charactersApi',
	baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
	endpoints: (builder) => ({
		getAllCharacters: builder.query<IAllCharacters, void>({
			query: () => '/character'
		}),
		getCharacterDetailById: builder.query<ICharacter, number | null>({
			query: (id) => `/character/${id}`
		}),
	})
});

export const {useGetAllCharactersQuery, useGetCharacterDetailByIdQuery} = charactersApi;
