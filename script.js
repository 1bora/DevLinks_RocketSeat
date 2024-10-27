function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // if (html.classList.contains("light")) {
  //   html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }

  const img = document.querySelector("#profile img")
  html.classList.contains("light")
    ? img.setAttribute("src", "./assets/736196400.gif") &&
      img.setAttribute("alt", "Gif de uma estrela em baixa resolução")
    : img.setAttribute(
        "src",
        "https://raw.githubusercontent.com/hajimebusuzima96/hajimebusuzima96/main/2924502035%20(4).gif"
      ) &&
      img.setAttribute("alt", "Gif de buraco negro verde em baixa resolução.")

  //troca de imagem lightmode= img1 se nao ligthmode = img2
}
