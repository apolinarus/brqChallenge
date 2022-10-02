const device = document.querySelectorAll(".device-container");
console.log(device);

function active(item) {
  let device = document.querySelector(`.${item}`);
  console.log(device);
  if (device.classList.contains("button-device-active")) {
    device.classList.remove("button-device-active");
  } else {
    device.classList.add("button-device-active");
  }
}