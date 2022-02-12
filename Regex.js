//UC1//
{
    let validateWithoutSpace = () => {
        console.log("\n UC1");
        try {
            let pincode = "400088"//"Enter pincode";
            let pincodePattern = new RegExp('^[1-9]{1}[0-9]{5}$');
            if (pincodePattern.test(pincode))
                console.log('Pincode is valid');
            else
                throw 'Error! Pincode is not valid';
        }
        catch (e) {
            console.error(e);
        }
    }
    validateWithoutSpace(); 
}
//UC2//
{
    let validatePINCode = () => {
        console.log("\n pincode given ");
        try {
            let pincode = "A400088"//"Enter pincode:";
            let pincodePattern = new RegExp('^[1-9]{1}[0-9]{5,}$');
            if (pincodePattern.test(pincode))
                console.log('Pincode is valid');
            else
                throw 'Error! Pincode is not valid';
        }
        catch (e) {
            console.error(e);
        }
    }
    validatePINCode();
}
//UC3//
{
    let validatePINCode = () => {
        console.log("\n pincode given");
        try {
            let pincode = "400088B"//"Enter pincode:";
            let pincodePattern = new RegExp('^[1-9]{1}[0-9]{5,}$');
            if (pincodePattern.test(pincode))
                console.log('Pincode is valid');
            else
                throw 'Error! Pincode is not valid';
        }
        catch (e) {
            console.error(e);
        }
    }
    validatePINCode();}
// UC4//
{
    let validatePINCode = () => {
        console.log("\n pincode given");
        try {
            const prompt=require("prompt-sync")();
            let pincode = prompt("Enter pincode: ");
            let pincodePattern = new RegExp('^[1-9]{1}[0-9]{2}\\s?[0-9]{3}$');
            if (pincodePattern.test(pincode))
                console.log('Pincode is valid');
            else
                throw 'Error! Pincode is not valid';
        }
        catch (e) {
            console.error(e);
        }
    }
    validatePINCode();
}
//UC5//
let EmailId = () => {
    console.log("\n email id given");
    try {
        let emailPattern = new RegExp("^(abc).?[a-z]{3,}[@](bridgelabz).?(co).?[a-z]{2,}$");
        if (emailPattern.test(emailId))
            console.log('Email id is valid');
        else
            throw 'Error! Email id is not valid';
    }
    catch (e) {
        console.error(e);
    }
}
