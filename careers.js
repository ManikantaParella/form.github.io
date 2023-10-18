function validateForm() {
    let x = document.getElementById("fname").value;
    if (x == "") {
      document.write("Name must be filled out");
      return false;
    }
  }