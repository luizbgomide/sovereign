---
---

window.onload = () => {
  const monsters = JSON.parse(decodeURIComponent("{{ site.data.monsters | jsonify | uri_escape  }}"))

  const miniSearch = new MiniSearch({
    fields: ["name"],
    storeFields: ["name", "hd", "page", "type"],
    searchOptions: {
      fuzzy: 0.2,
      prefix: true,
    },
  });

  monsters.forEach((monster, i) => monster.id = i)

  miniSearch.addAll(monsters);

  function displaySearchResults(results) {
    const searchResults = document.getElementById("search-results");

    if (results.length) {
      // Are there any results?
      let appendString = "";

      for (const { name, hd, page, type } of results) {
        appendString += `<li>${name}: HD ${hd}, p${page}, ${type}</li>`;
      }

      searchResults.innerHTML = appendString;
    } else {
      searchResults.innerHTML = "<li>No results found</li>";
    }
  }

  const searchElement = document.getElementById("search");
  searchElement.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
      document.querySelector("#search-container a").click();
      return;
    }
    if (searchElement.value === "") {
      const searchResults = document.getElementById("search-results");
      searchResults.innerHTML = "";
    } else {
      displaySearchResults(miniSearch.search(searchElement.value));
    }
  });

  document.getElementById("search-container").addEventListener("click", (e) => {
    if (e.target?.localName !== "a") {
      return;
    }

    const searchResults = document.getElementById("search-results");
    document.getElementById("sidebar").classList.remove("active");
    searchResults.innerHTML = "";
    searchElement.value = "";
  });

  document.onkeyup = function (e) {
    const search = document.getElementById("search");
    if (e.key === "/" && e.target !== search) {
      search.focus();
    }
  };

  document.querySelectorAll("table").forEach((table) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("table-wrapper");
    table.parentNode.insertBefore(wrapper, table);
    return wrapper.appendChild(table);
  });
};
