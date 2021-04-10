const sizeSubmitButton = document.getElementById('size-submit-button');
const canvas = document.getElementById('pixelCanvas');

// Listener for clicks on the Size Submit Button
sizeSubmitButton.addEventListener('click', function () {
  var height = document.getElementById('inputHeight').value;
  var width = document.getElementById('inputWidth').value;

  makeGrid(height, width);
});

// Listener for clicks on the grid squares
canvas.addEventListener("click", function (e) {
  var selectedColor = document.getElementById("colorPicker").value;
  var clickedCell = document.getElementById(e.target.id);
  if(clickedCell !== null) {
    clickedCell.style.backgroundColor = selectedColor;
  }
})

// Function to generate grid by dynamically creating HTML for a table based on the provided size
function makeGrid(height, width) {
  var html = "";
  html += "<tbody>";
  for (var i = 0; i < height; i ++) {
    html += "<tr>";
    for (var j = 0; j < width; j ++) {
      html += "<td id=\"" + i.toString() + "-" + j.toString() + "\"></td>";
    }
    html += "</tr>";
  }
  html += "</tbody>";

  canvas.innerHTML = html;
}
