export const checkValidData=(name,email,password)=>{

    const isValidName = /^[a-zA-Z\u00C0-\u00ff]{3,}(?: [a-zA-Z\u00C0-\u00ff]{3,})*$/m.test(name);

    const isEmailValid= /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

    const isPasswordValid = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);

     if(!isValidName) return "Name is not valid";
    if(!isEmailValid) return "Email Id is not valid";
    if(!isPasswordValid) return "Password is not valid";

    return null;
}