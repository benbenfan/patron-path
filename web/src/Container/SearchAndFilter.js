class SearchAndFilter {
  searchAndFilter(locations, search, state, code) {
    
    if(search !== '') {
      let searchedLocations = [];
      for(const loc of Object.values(locations)) {
          if(loc.city.includes(search.toUpperCase())) {
            searchedLocations.push(loc);
          }
      }
      locations = searchedLocations;
    }
    
    if(state !== 'ALL') {
      let locationsInState = [];

      for(const location of Object.values(locations)) {
        if(location.statecode === state)
          locationsInState.push(location)
      }
      locations = locationsInState;
    } 

    if(code !== '') {
      let coursesAfterZip = [];

      for(const location of Object.values(locations)) {
        // console.log(location.zipcode +" "+code);
        if(location.zipcode === parseInt(code))
          coursesAfterZip.push(location);
      }
      locations = coursesAfterZip;
    }

    // if(maximumCredits !== '') {
    //   let coursesAfterMaximumCredits = [];

    //   for(const course of Object.values(courses)) {
    //     if(course.credits <= parseInt(maximumCredits))
    //       coursesAfterMaximumCredits.push(course);
    //   }
    //   courses = coursesAfterMaximumCredits;
    // }
    // console.log(locations);
    return locations;
  }
}

export default SearchAndFilter;
