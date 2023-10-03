const Content =({ countries, clicking })=>{
    if (countries.length > 10) {
        return (
            <div>
                <p>Too many matches, specify another filter</p>
            </div>
        )
    }
    if(countries.length === 1) {
        const country = countries[0]
        const languages = Object.values(country.languages)
        /* console.log(languages)
        languages.map(line=> console.log(line))  */
     return (
            <div>
                <h2>{country.name.common}</h2>
                <p>Capital {country.capital}</p>
                <p>Area {country.area}</p>
                <h3>Languages</h3>
               {languages.map(line=> 
                <li key={line}>{line}</li>
                )}
                <div><img src={country.flags.png}></img></div>
            
            </div>
        )
    }
    return(
        <div>
          {countries.map(line=>
            <p key={line.cca2}>{line.name.common} <button onClick={()=> clicking(line.cca2)}> show</button></p>
            )}
        </div>
    )
}

export default Content