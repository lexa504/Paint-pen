class Button {
  constructor(id, onClick, changeEl, onChange) {
    console.log("constructed button");
    this.el = document.getElementById(id);
    this.el.addEventListener("mousedown", (e) => {
      e.target.style.border = "inset";
    });
    this.el.addEventListener("mouseup", (e) => {
      e.target.style.border = "outset";
    });
    this.el.addEventListener("mouseout", (e) => {
      e.target.style.border = "outset";
    });
    if (onClick) {
      this.el.addEventListener("click", onClick);
    }
    if (changeEl && onChange) {
      document.getElementById(changeEl).addEventListener("change", onChange);
    }
  }
}
