window.onload = () => {
  document.querySelectorAll("table").forEach((table) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("table-wrapper");
    table.parentNode.insertBefore(wrapper, table);
    return wrapper.appendChild(table);
  });
};
