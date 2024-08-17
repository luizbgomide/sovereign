---
---

window.onload = () => {
  const data = JSON.parse(decodeURIComponent("{{ site.data.toc | jsonify | uri_escape  }}"))

  const miniSearch = new MiniSearch({
    fields: ['label'],
    storeFields: ['id', 'label'],
    searchOptions: {
      fuzzy: 0.2,
      prefix: true,
    }
  })

  let documents = []
  const recurse = ({ id, label, children }) => {
    documents.push({
      id,
      label,
    })

    for (const child of children) {
      recurse(child)
    }
  }

  for (child of data) {
    recurse(child)
  }

  miniSearch.addAll(documents)

  function displaySearchResults(results) {
    const searchResults = document.getElementById('search-results');

    if (results.length) { // Are there any results?
      let appendString = '';

      for (const {id, label} of results) {
        const root = id.split("#")[0].slice(1)
        appendString += `<li><a href="${id}">${label}</a><span class="badge">${root}</span></li>`;
      }

      searchResults.innerHTML = appendString;
    } else {
      searchResults.innerHTML = '<li>No results found</li>';
    }
  }

  const searchElement = document.getElementById("search")
  searchElement.addEventListener("keyup", function(e) {
    if (e.key === "Enter") {
      document.querySelector("#search-container a").click()
      return
    }
    if (searchElement.value === "") {
      const searchResults = document.getElementById('search-results');
      searchResults.innerHTML = "";
    } else {
      displaySearchResults(miniSearch.search(searchElement.value))
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

  document.onkeyup = function (e) {
    const search = document.getElementById("search")
    if (e.key === "/" && e.target !== search) {
      search.focus()
    }
  };
}
