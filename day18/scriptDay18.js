const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
/*
//01
fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        data.forEach(country => {
            console.log(`Country: ${country.name}`);
            console.log(`Capital: ${country.capital || 'N/A'}`);
            console.log(`Languages: ${country.languages.map(lang => lang.name).join(', ') || 'N/A'}`);
            console.log(`Population: ${country.population || 'N/A'}`);
            console.log(`Area: ${country.area || 'N/A'}`);
            console.log('------------------------');
        })
    })
    .catch(error => console.error(error));

 const fetchData = async () => {
    try {
        const response = await fetch(countriesAPI)
        const countries = await response.json()
        console.log(countries)
    } catch (err) {
        console.log(err)
    }
 }
console.log('===== async and await')
fetchData()
*/


//02
fetch(catsAPI)
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            console.log(element.name)
        });
        console.log
    })
    .catch(error => console.error(error));


//Exercise Level 03:
//01
fetch(catsAPI)
    .then(response => response.json())
    .then(data => {
        const breedsAndWeights = data.filter(cat => cat.weight.metric);
        //console.log(breedsAndWeights);
        const weightsInMetric = breedsAndWeights.map(cat => parseFloat(cat.weight.metric))
        //console.log(weightsInMetric);
        const averageWeight = (weightsInMetric.reduce((acc, num) => acc + num, 0)) / weightsInMetric.length;
        console.log(`The average weight of cats in metric system is ${averageWeight} kgs`)

        /*     console.log(data)
       data.forEach(cat => {
       console.log(`${cat.weight.metric}`)     
        })*/
    })
    .catch(error => console.error(error));

//02
fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        const countriesPopulation = data.filter(country => country.population);
        console.log(countriesPopulation);
        
        const sortedCountries = countriesPopulation.sort(
            (country1, country2) => (country1.population < country2.population) ? 1 : (country1.population > country2.population) ? -1 : 0); //how to sort by  population size?
        
        const topTenSortedCountries = sortedCountries.slice(0, 10);
        //console.log(topTenSortedCountries)

        const populationsArray = topTenSortedCountries.map(({name, population}) => ({name, population}));
        console.log(populationsArray)
    })
    .catch(error => console.error(error));

//03
fetch(countriesAPI)
    .then(response => response.json())
    .then(data => {
        const uniqueLanguages = new Set();
        data.forEach(country => {
            if (country.hasOwnProperty('languages')) {
                country.languages.forEach(language => {
                    let temp = Object.values(language.name).join('')
                    
                    uniqueLanguages.add(temp);
                });
            }
        });
        const totalUniqueLanguages = uniqueLanguages.size;
        console.log(`total: ${totalUniqueLanguages}`)
        console.log(uniqueLanguages)
    
      /*  const countriesLanguages = data.filter(country => country.languages);
        console.log(countriesLanguages)
        const languagesArray = countriesLanguages.map(({languages}) => ({languages}))
        console.log(languagesArray)


        const allLanguages = languagesArray.filter(({name}) => ({name}))
        const allLanguagesArray = [];
        for (let name of allLanguages) {
            console.log(name[key])
        }

        const initialValue = "";
        const result = languagesArray.reduce((acc, cur) => acc + cur, initialValue)
     */
        // console.log(result)
       // const languageSet = new Set(languagesArray);
       // console.log(languageSet)
    })
    .catch(error => console.error('error fetching data', error));

