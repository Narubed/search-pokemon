/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import useCurrentGraphQL from '@/hook/useCurrentGraphQL'
import { Container, Grid } from '@mui/material';
import CardPokemons from '@/components/Dashboard/CardPokemon'
import Header from '@/components/Header'
import SearchPokemon from "@/components/Dashboard/SearchPokemon";

export default function Home() {
  const { useFetchData, useFetchFindOne } = useCurrentGraphQL()
  const [isData, setData] = useState<any>([]);
  const [isSearchData, setSearchData] = useState<any>();
  useEffect(() => {
    fetchData()
 
  }, [])
  useEffect(() => {
    if (!isSearchData) {
      setSearchData(isData)
    }
  },[isData, isSearchData])

  const fetchData = useCallback(async () => {
    let data = {
      query: `query Query {
                query {
                pokemons(first: 2000) {
                    id
                    name
                    number
                    classification
                    image
                }
            }
        }`
    };
    const response: any = await useFetchData(data);
    setData(response)
    setSearchData(response)
  }, [])


  return (

    <Container >
      <Header />
      <div style={{ backgroundColor: 'white', borderRadius: '5px', margin: 10 }}>
        <SearchPokemon isData={isData} setSearchData={setSearchData} />
      </div>
      <Grid container spacing={2} sx={{ justifyContent: 'center', alignContent: "center" }}>
        {(isSearchData ? isSearchData : isData).map((item: any) =>
          <Grid item xs={12} sm={4} md={3} p={1} key={item.id}>
            <CardPokemons pokemon={item} useFetchFindOne={useFetchFindOne} />
          </Grid>
        )}
      </Grid>
    </Container >
  );
}