---
---

window.onload = () => {
  const data = JSON.parse(decodeURIComponent("{{ site.data.toc | jsonify | uri_escape  }}"))
  const headers = {}

  const index = lunr(function() {
    this.field("label")

    const recurse = ({id, label, children}) => {
      this.add({
        id,
        label,
      })

      headers[id] = label
      for (const child of children) {
        recurse(child)
      }
    }

    for (child of data) {
      recurse(child)
    }
  })

  function displaySearchResults(results) {
    const searchResults = document.getElementById('search-results');

    if (results.length) { // Are there any results?
      let appendString = '';

      for (const result of results) {
        const label = headers[result.ref]
        appendString += `<li><a href="${result.ref}">${label}</a>`;
      }

      searchResults.innerHTML = appendString;
    } else {
      searchResults.innerHTML = '<li>No results found</li>';
    }
  }

  const searchElement = document.getElementById("search")
  searchElement.addEventListener("keyup", function(e) {
    if (searchElement.value === "") {
      const searchResults = document.getElementById('search-results');
      searchResults.innerHTML = "";
    } else {
      displaySearchResults(index.search(`*${searchElement.value}*`))
    }
  })

  document.getElementById("search-container").addEventListener("click", (e) => {
    if (e.target?.localName !== "a") {
      return;
    }

    const searchResults = document.getElementById('search-results');
    document.getElementById("sidebar").classList.remove("active");
    searchResults.innerHTML = "";
    searchElement.value = "";
  });
}
