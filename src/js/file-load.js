document.getElementById('uploadBtn').onchange = function () {
  document.getElementById('uploadFile').value = this.value.replace('C:\\fakepath\\', '');
};
