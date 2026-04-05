function togglePassword(): void {
  const passwordField = document.getElementById("password") as HTMLInputElement;

  if (passwordField.type === "password") {
    passwordField.type = "text";
  } else {
    passwordField.type = "password";
  }
}