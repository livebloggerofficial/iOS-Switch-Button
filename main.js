const handleSwitch = (switchNumber) => {
  let isChecked = document.getElementById(`switch-${switchNumber}`).checked;

  console.log(
    `Switch ${switchNumber} is ${isChecked ? "selected" : "not selected,"}`
  );
};
