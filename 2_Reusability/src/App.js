import React from "react"
import DataFetcher from "./DataFetcher"

function App(props) {
  return (
    <DataFetcher url="https://swapi.dev/api/people/1"
      render={apiData => (
        apiData.loading ? 
        <h1>Loading...</h1> :
        <pre>{JSON.stringify(apiData.data, null, 2)}</pre>
      )}
    />
  )
}

// * Part 2: Call the function the DataFetcher is expecting.
// * If should receive the data and the loading state, and return the JSX
//   * that makes use of that info. If the data is still loading, display
//   * "Loading..." in an h1 element, and once the data has loaded, just display 
//   * the data with `<p>{JSON.stringify(data)}</p>`
//   * 
//   * Remember: With the render props pattern, you can use a custom prop
//   * (typically called `render`), OR you can use `props.children`. Based
//   * on what's already written here for you, you should be able to figure
//   * out which of these we're using. (You may have to make changes to the
//   * DataFetcher component based on what you see here.)


export default App