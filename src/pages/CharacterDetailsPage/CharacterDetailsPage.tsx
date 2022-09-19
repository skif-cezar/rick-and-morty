import React from "react";
import { useParams } from "react-router-dom";
import { useGetCharacterDetailByIdQuery } from "../../store/api/characters";

export const CharacterDetailsPage = () => {
	const {id} =useParams();
  
	const {data, isLoading, error} = useGetCharacterDetailByIdQuery(Number(id) || null);

	if (isLoading) {
		return <h1>Загрузка...</h1>;
	 }
  
	 if (error) {
		return <h1>Не удалось получить данные.</h1>;
	 }

	 if(!data) {
		return <h1>Данные не найдены.</h1>;
	 }

	return (
		<div style={{padding: 20}}>
			<img src={data.image} alt={data.name} />
        <div>{data.name}</div>
        <div>{data.gender}</div>
		  <div>{data.species}</div>
		</div>
	)
}