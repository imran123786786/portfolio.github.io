var typed = new Typed(".typing", {
    strings: [" ","Web Designer", "Web Developer","Graphic Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
});
  
const nav = document.querySelector(".nav");
const navlist = nav.querySelectorAll("li");
const totalNavList = navlist.length;
allSection = document.querySelectorAll(".section"),
totalSection = allSection.length
for (let i = 0; i < totalNavList; i++) {
  const a = navlist[i].querySelector("a");
  a.addEventListener("click", function () {
    for (let j = 0; j < totalNavList; j++) {
      navlist[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if(window.innerHeight < 1200)
    {
      asideSectionTogglerBtn();
    }
  });
}
function showSection(element)
{
  for(let i = 0; i < totalSection; i++)
  {
    allSection[i].classlist.remove("active")
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active")
}
const navTogglerBtn = document.querySelector(".nav-toggler"),
aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () =>
{
  asideSectionTogglerBtn();
})
function asideSectionTogglerBtn()
{
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for(let i = 0; i < totalSection; i++)
  {
    allSection[i].classList.toggle("open")
  }
}