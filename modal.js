var modal = document.getElementById("my-modal")

var btn = document.getElementById("button-section__first")

var span = document.getElementsByClassName("close")[0]

btn.onclick = function () {
	modal.style.display = "block"
}

span.onclick = function () {
	modal.style.display = "none"
}
