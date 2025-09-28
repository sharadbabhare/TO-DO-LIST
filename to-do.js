let input = document.getElementById("input");
let btn = document.getElementById("button");
let output = document.getElementById("output");
// let button = document.getElementsByTagName("button")

btn.addEventListener("click", () => {
      let text = input.value;
      if (text === "") return;
      const ol = document.createElement("ol")
      const button = document.createElement("button");
      let li = document.createElement("li");
      button.innerHTML = `remove`;
      li.innerHTML = `${text}`;

      ol.appendChild(li);
      ol.appendChild(button);
      output.appendChild(ol);


      button.onclick = function () {
            ol.remove();
      };
});


