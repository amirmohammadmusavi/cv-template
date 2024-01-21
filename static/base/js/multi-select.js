
// Initialize function, create initial tokens with itens that are already selected by the user
function init(element) {
    // Create div that wroaps all the elements inside (select, elements selected, search div) to put select inside
    const wrapper = document.createElement("div");
    wrapper.addEventListener("click", clickOnWrapper);
    wrapper.classList.add("multi-select-component");
  
    // Create elements of search
    const search_div = document.createElement("div");
    search_div.classList.add("search-container");
    const input = document.createElement("input");
    input.classList.add("selected-input");
    input.setAttribute("autocomplete", "off");
    input.setAttribute("tabindex", "0");
    input.addEventListener("keyup", inputChange);
    input.addEventListener("keydown", deletePressed);
    input.addEventListener("click", openOptions);
  
    const dropdown_icon = document.createElement("a");
    dropdown_icon.setAttribute("href", "#");
    dropdown_icon.classList.add("dropdown-icon");
  
    dropdown_icon.addEventListener("click", clickDropdown);
    const autocomplete_list = document.createElement("ul");
    autocomplete_list.classList.add("autocomplete-list");
    search_div.appendChild(input);
    search_div.appendChild(autocomplete_list);
    search_div.appendChild(dropdown_icon);

    // set the wrapper as child (instead of the element)
    element.parentNode.replaceChild(wrapper, element);
    // set element as child of wrapper
    wrapper.appendChild(element);
    wrapper.appendChild(search_div);
    console.log(element);
    for (let i = 0; i < element.children.length; i++) {
      if ( element.children[i].hasAttribute('is_selected')) {
    
        const li = document.createElement("li");
        li.innerText = element.children[i].text;
        li.setAttribute("data-value", element.children[i].value);
        li.addEventListener("click", selectOption);
        //autocomplete_list.appendChild(li);
        console.log('yse');
        createToken(wrapper, li)
      }
    }
    createInitialTokens(element);
    addPlaceholder(wrapper);
  }
  
  function removePlaceholder(wrapper) {
    const input_search = wrapper.querySelector(".selected-input");
    input_search.removeAttribute("placeholder");
  }
  
  function addPlaceholder(wrapper) {
    const input_search = wrapper.querySelector(".selected-input");
    const tokens = wrapper.querySelectorAll(".selected-wrapper");
    if (!tokens.length && !(document.activeElement === input_search))
      input_search.setAttribute(
        "placeholder",
        "search or choose.."
      );
  }
  
  // Function that create the initial set of tokens with the options selected by the users
  function createInitialTokens(select) {
    let { options_selected } = getOptions(select);
    const wrapper = select.parentNode;
    for (let i = 0; i < options_selected.length; i++) {
      console.log(options_selected);
      createToken(wrapper, options_selected[i]);
    }
  }
  
  // Listener of user search
  function inputChange(e) {
    
    const wrapper = e.target.parentNode.parentNode;
    const select = wrapper.querySelector("select");
    const dropdown = wrapper.querySelector(".dropdown-icon");
    
    const input_val = e.target.value;
    if (input_val) {
      dropdown.classList.add("active");
      populateAutocompleteList(select, input_val.trim());
    } else {
      dropdown.classList.remove("active");
      const event = new Event("click");
      dropdown.dispatchEvent(event);
    }
  }
  
  // Listen for clicks on the wrapper, if click happens focus on the input
  function clickOnWrapper(e) {
    const wrapper = e.target;
    if (wrapper.tagName == "DIV") {
      const input_search = wrapper.querySelector(".selected-input");
      const dropdown = wrapper.querySelector(".dropdown-icon");
      if (!dropdown.classList.contains("active")) {
        const event = new Event("click");
        dropdown.dispatchEvent(event);
      }
      input_search.focus();
      removePlaceholder(wrapper);
    }
  }
  
  function openOptions(e) {
    const input_search = e.target;
    const wrapper = input_search.parentElement.parentElement;
    const dropdown = wrapper.querySelector(".dropdown-icon");
    if (!dropdown.classList.contains("active")) {
      const event = new Event("click");
      dropdown.dispatchEvent(event);
    }
    e.stopPropagation();
  }
  
  // Function that create a token inside of a wrapper with the given value
  function createToken(wrapper, value) {
    console.log('ss',value);
    const search = wrapper.querySelector(".search-container");
    // Create token wrapper
    const token = document.createElement("div");
    token.classList.add("selected-wrapper");
    const token_span = document.createElement("span");
    const input_html = `<input type="number" value="${value.dataset.value}" class="d-none" name="services[]">`
    token_span.classList.add("selected-label");
    token_span.innerHTML = value.innerHTML;
    const close = document.createElement("a");
    close.classList.add("selected-close");
    close.setAttribute("tabindex", "-1");
    close.setAttribute("data-option", value.dataset.value);
    close.setAttribute("data-hits", 0);
    close.setAttribute("href", "#");
    var closei = '<svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 4V15.8C3 16.9201 3 17.4798 3.21799 17.9076C3.40973 18.2839 3.71547 18.5905 4.0918 18.7822C4.5192 19 5.07899 19 6.19691 19H11.8031C12.921 19 13.48 19 13.9074 18.7822C14.2837 18.5905 14.5905 18.2839 14.7822 17.9076C15 17.4802 15 16.921 15 15.8031V4M3 4H5M3 4H1M5 4H13M5 4C5 3.06812 5 2.60241 5.15224 2.23486C5.35523 1.74481 5.74432 1.35523 6.23438 1.15224C6.60192 1 7.06812 1 8 1H10C10.9319 1 11.3978 1 11.7654 1.15224C12.2554 1.35523 12.6447 1.74481 12.8477 2.23486C12.9999 2.6024 13 3.06812 13 4M13 4H15M15 4H17" stroke="#FF5757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>'
    close.insertAdjacentHTML("beforeend",closei);
    close.addEventListener("click", removeToken);
    token.appendChild(token_span);
    token_span.insertAdjacentHTML("beforeend",input_html);
    token.appendChild(close);
    wrapper.insertBefore(token, search);
  }
  
  // Listen for clicks in the dropdown option
  function clickDropdown(e) {
    const dropdown = e.target;
    const wrapper = dropdown.parentNode.parentNode;
    const input_search = wrapper.querySelector(".selected-input");
    const select = wrapper.querySelector("select");
    dropdown.classList.toggle("active");
  
    if (dropdown.classList.contains("active")) {
      removePlaceholder(wrapper);
      input_search.focus();
  
      if (!input_search.value) {
        populateAutocompleteList(select, "", true);
      } else {
        populateAutocompleteList(select, input_search.value);
      }
    } else {
      clearAutocompleteList(select);
      addPlaceholder(wrapper);
    }
  }
  
  // Clears the results of the autocomplete list
  function clearAutocompleteList(select) {
    const wrapper = select.parentNode;
  
    const autocomplete_list = wrapper.querySelector(".autocomplete-list");
    autocomplete_list.innerHTML = "";
  }
  
  // Populate the autocomplete list following a given query from the user
  function populateAutocompleteList(select, query, dropdown = false) {
    const { autocomplete_options } = getOptions(select);
    
    let options_to_show;
    if (dropdown) options_to_show = autocomplete_options;
    else options_to_show = autocomplete(query, autocomplete_options);
    console.log('clearAutocompleteList',options_to_show,select);
    console.log('clearAutocompleteList',dropdown,query)
    const wrapper = select.parentNode;
    const input_search = wrapper.querySelector(".search-container");
    const autocomplete_list = wrapper.querySelector(".autocomplete-list");
    autocomplete_list.innerHTML = "";
    const result_size = options_to_show.length;
    if (result_size == 1) {
      const li = document.createElement("li");
      li.innerText = options_to_show[0].text;
      li.setAttribute("data-value", options_to_show[0].value);
      li.addEventListener("click", selectOption);
      autocomplete_list.appendChild(li);
      if (query.length == options_to_show[0].length) {
        const event = new Event("click");
        li.dispatchEvent(event);
      }
    } else if (result_size > 1) {
      for (let i = 0; i < result_size; i++) {
        const li = document.createElement("li");
        li.innerText = options_to_show[i].text;
        li.setAttribute("data-value", options_to_show[i].value);
        li.addEventListener("click", selectOption);
        autocomplete_list.appendChild(li);
      }
    } else {
      const li = document.createElement("li");
      li.classList.add("not-cursor");
      li.innerText = "not found";
      autocomplete_list.appendChild(li);
    }
  }
  
  // Listener to autocomplete results when clicked set the selected property in the select option
  function selectOption(e) {
    const wrapper = e.target.parentNode.parentNode.parentNode;
    console.log(wrapper);
    console.log(e.target);
    const input_search = wrapper.querySelector(".selected-input");
    const option = wrapper.querySelector(
      `select option[value="${e.target.dataset.value}"]`
    );
    option.setAttribute("selected", "");
    createToken(wrapper, e.target);
    if (input_search.value) {
      input_search.value = "";
    }
  
    input_search.focus();
    e.target.remove();
    const autocomplete_list = wrapper.querySelector(".autocomplete-list");
    if (!autocomplete_list.children.length) {
      const li = document.createElement("li");
      li.classList.add("not-cursor");
      li.innerText = "موردی یافت نشد";
      autocomplete_list.appendChild(li);
    }
  
    const event = new Event("keyup");
    input_search.dispatchEvent(event);
    
    e.stopPropagation();
  }
  
  // function that returns a list with the autcomplete list of matches
  function autocomplete(query, options) {
    // No query passed, just return entire list
    if (!query) {
      return options;
    }
    let options_return = [];
    
    for (let i = 0; i < options.length; i++) {
      if (options[i].text.toUpperCase().indexOf(query.toUpperCase()) > -1) {
        options_return.push({'value':options[i].value,'text':options[i].text});
      }
    }
    
    return options_return;
  }
  
  // Returns the options that are selected by the user and the ones that are not
  function getOptions(select) {
    // Select all the options available
    // const all_options = Array.from(select.querySelectorAll("option")).map(
    //   (el) => el.value
    // );
    console.log('getOptions',select);
    const all_options = [], options=select.querySelectorAll("option");
    for(let i =0;i<options.length;i++) {
      all_options.push({text:options[i].innerHTML,value:options[i].value})
    }
    // Get the options that are selected from the user
    const options_selected = Array.from(
      select.querySelectorAll("option:checked")
    ).map((el) => el.value);
    
    // Create an autocomplete options array with the options that are not selected by the user
    const autocomplete_options = [];
    all_options.forEach((option) => {
      if (!options_selected.includes(option.value)) {
        autocomplete_options.push(option);
      }
    });
  
    autocomplete_options.sort();
  
    return {
      options_selected,
      autocomplete_options,
    };
  }
  
  // Listener for when the user wants to remove a given token.
  function removeToken(e, obj) {
    // Get the value to remove
    obj = obj || document.activeElement;
    const value_to_remove = obj.dataset.option;
    const wrapper = obj.parentNode.parentNode;
    const input_search = wrapper.querySelector(".selected-input");
    const dropdown = wrapper.querySelector(".dropdown-icon");
    // Get the options in the select to be unselected
    const option_to_unselect = wrapper.querySelector(
      `select option[value="${value_to_remove}"]`
    );
    option_to_unselect.removeAttribute("selected");
    // Remove token attribute
    obj.parentNode.remove();
    input_search.focus();
    dropdown.classList.remove("active");
    const event = new Event("click");
    dropdown.dispatchEvent(event);
    e.stopPropagation();
    
  }
  
  // Listen for 2 sequence of hits on the delete key, if this happens delete the last token if exist
  function deletePressed(e) {
    const wrapper = e.target.parentNode.parentNode;
    const input_search = e.target;
    const key = e.keyCode || e.charCode;
    const tokens = wrapper.querySelectorAll(".selected-wrapper");
  
    if (tokens.length) {
      const last_token_x = tokens[tokens.length - 1].querySelector("a");
      let hits = +last_token_x.dataset.hits;
  
      if (key == 8 || key == 46) {
        if (!input_search.value) {
          if (hits > 1) {
            // Trigger delete event
            const event = new Event("click");
            last_token_x.dispatchEvent(event);
          } else {
            last_token_x.dataset.hits = 2;
          }
        }
      } else {
        last_token_x.dataset.hits = 0;
      }
    }
    return true;
    ;
  }
  
  // You can call this function if you want to add new options to the select plugin
  // Target needs to be a unique identifier from the select you want to append new option for example #multi-select-plugin
  // Example of usage addOption("#multi-select-plugin", "tesla", "Tesla")
  function addOption(target, val, text) {
    const select = document.querySelector(target);
    let opt = document.createElement("option");
    opt.value = val;
    opt.innerHTML = text;
    select.appendChild(opt);
    ;
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    // get select that has the options available
    const select = document.querySelectorAll("[data-multi-select-plugin]");
    select.forEach((select) => {
      init(select);
    });
    var selecttag = document.querySelector("[data-multi-select-plugin]");
  
    for (var i = 0; i < selecttag.children.length; i++) {
      selecttag.children[i].setAttribute(
        "value",
        selecttag.children[i].value
      );
    }
    // Dismiss on outside click
    document.addEventListener("click", () => {
      // get select that has the options available
      const select = document.querySelectorAll("[data-multi-select-plugin]");
      for (let i = 0; i < select.length; i++) {
        if (event) {
          var isClickInside = select[i].parentElement.parentElement.contains(
            event.target
          );
  
          if (!isClickInside) {
            const wrapper = select[i].parentElement.parentElement;
            const dropdown = wrapper.querySelector(".dropdown-icon");
            const autocomplete_list = wrapper.querySelector(".autocomplete-list");
            //the click was outside the specifiedElement, do something
            dropdown.classList.remove("active");
            autocomplete_list.innerHTML = "";
            addPlaceholder(wrapper);
          }
        }
      }
    });
  });