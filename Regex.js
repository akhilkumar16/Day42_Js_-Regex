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
