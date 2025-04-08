function validateEmail(email) {
  const index = email.indexOf("@");
  if (index > 0) {
    const domain = email.substring(index);
    return domain.includes(".");
  }

  return false;
}

module.exports = validateEmail;
