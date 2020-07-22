import React, { useState, useEffect } from "react";
import { Box, Flex, Text, Heading, Select } from "@chakra-ui/core";
import Graph from './Graph';

const url = "https://v2-api.sheety.co/b3d137b27f25a1fe4cb1f781d99dd376/timeSeriesCovid19Confirmed/timeSeriesCovid19Confirmed"

const GraphContainer = () => {
  const [data, setData] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        const countryMap = res.timeSeriesCovid19Confirmed.reduce((countries, x) => {
          if (countries[x['country/region']]) return countries;
          countries[x['country/region']] = x;
          return countries;
        }, {})
        setData(countryMap);
        setLoading(false);
        setError(false);
      })
      .catch(err => setError(err.message));
  }, []);

  const handleOnSelect = (e) => setSelectedCountry(e.target.value);

  return (
    <Flex
      align="center"
      direction="column"
      justify="space-between"
    >
      <Box p={6}>
        {error && <Text color="red.500">Something went wrong!</Text>}
        <Heading as="h3" size="lg">
          Selected Country: {selectedCountry}
        </Heading>
        <Select width="50%" margin="64px auto" onChange={handleOnSelect} placeholder="Select option">
          {loading
            ? <option value="">Loading...</option>
            : (
              Object.keys(data).sort().map(country => (
                <option key={country} value={country}>{country}</option>
              ))
            )
          }
        </Select>
        <Graph data={data && data[selectedCountry]} />
      </Box>
    </Flex>
  );
};

export default GraphContainer;