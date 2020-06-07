function search() {
  let search_string = document.getElementById("search_string").value;
  let input = search_string
    .trim()
    .replace("+", "%2B")
    .replace("=", "%3D")
    .replace("&", "%26")
    .replace(" ", "+");
  let search_url = "https://www.google.com/search?q=";
  input = search_url + input;
  window.location = input;
}

document.getElementById("container").onclick = function () {
  document.getElementById("drop_menu").style.display = "none";
  document.getElementById("drop_account").style.display = "none";
  document.getElementById("drop_setting").style.display = "none";
};
