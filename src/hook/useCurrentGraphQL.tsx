
import React from 'react'
import axios from 'axios';

export default function useCurrentGraphQL() {

    const useFetchData = async (props: any) => {
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://graphql-pokemon2.vercel.app',
            headers: {
                'Content-Type': 'application/json'
            },
            data: props
        };
        const response = await axios.request(config)
            .then((response: any) => {
                const { pokemons } = response.data.data.query
                return pokemons
            })
        return response
    }
    const useFetchFindOne = async (props: any) => {
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://graphql-pokemon2.vercel.app',
            headers: {
                'Content-Type': 'application/json'
            },
            data: props
        };
        const response = await axios.request(config)
            .then((response: any) => {
                const { pokemon } = response.data.data.query
                return pokemon
            })
        return response
    }
    

    return { useFetchData,useFetchFindOne }
}
