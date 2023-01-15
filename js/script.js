let userName = document.getElementById("name");
let email = document.getElementById("email");
let text = document.getElementById("text");

form.addEventListener("submit", (e) => {
  // tira o comportamento padrão de um elemento
  e.preventDefault();

  validation();
});

// função que realiza a validação dos inputs do form.
function validation() {
  let userNameValue = userName.value.trim();
  let emailValue = email.value.trim();
  let textValue = text.value.trim();

  if (userNameValue === "") {
    errorValidation(userName, "Preencha esse campo.");
  } else {
    sucessValidation(userName);
  }

  if (emailValue === "") {
    errorValidation(email, "Preencha esse campo.");
  } else {
    sucessValidation(email);
  }

  if (textValue === "") {
    errorValidation(text, "Preencha esse campo.");
  } else {
    sucessValidation(text);
  }
}

function errorValidation(input, message) {
  // parentElement: retorna uma referencia ao elemento com base no elemento pai. Pegará o input que está sendo usado como parametro, e estará referenciando a div FormC., que é o elemento pai do input.
  let formControl = input.parentElement;
  // pegando o elemento small, do form control.
  let small = formControl.querySelector("small");
  
  small.style.display = "block";
  small.innerText = message;

  formControl.className = "formC error";
}

function sucessValidation(input) {
  let formControl = input.parentElement;
  let small = formControl.querySelector("small");

  let title = document.getElementById("formTitle");

  small.style.display = "none";
  formControl.className = "formC sucess";
  title.innerText = "Obrigado pela mensagem!";
}
