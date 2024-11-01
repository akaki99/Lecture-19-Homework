let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let info = prompt("ინფორმაციის დამატება");
  if (info.length > 0) {
    let UlList = document.createElement("ul");
    document.body.appendChild(UlList);

    let LiList = document.createElement("li");
    UlList.appendChild(LiList);
    LiList.textContent = info;

    let btn = document.createElement("button");
    LiList.appendChild(btn);
    btn.textContent = "remove";

    btn.addEventListener("click", () => {
      if (LiList.children.length > 0) {
        LiList.remove();
      }
    });
  } else {
    alert("შეიყვანეთ ინფორმაცია!");
  }
});