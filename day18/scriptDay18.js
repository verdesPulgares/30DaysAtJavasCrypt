const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'
/*
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
//Exercise Level 02:
//01
fetch(catsAPI)
    .then(response => response.json())
    .then(data => {
        const breedsAndWeights = data.filter(cat => cat.weight.metric);
        console.log(breedsAndWeights);
        const weightsInMetric = breedsAndWeights.map(cat => parseFloat(cat.weight.metric))
        console.log(weightsInMetric);
        const averageWeight = (weightsInMetric.reduce((acc, num) => acc + num, 0)) / weightsInMetric.length;
        console.log(`The average weight of cats in metric system is ${averageWeight} kgs`)

        /*     console.log(data)
       data.forEach(cat => {
       console.log(`${cat.weight.metric}`)     
        })*/
    })
    .catch(error => console.error(error));

//02

