module.exports = 
{
printOutFirstNames: function () 
{
    let firstNamesArray = ["Oscar","Angela","Kevin","Michael","Jim","Dwight","Andy","Stanley","Phyllis","Ryan","Peter","Gabe","Darryl","Roy","Pam","Erin","Creed","Meredith","Kelly","Clark"];
    console.log("First Names: ");
    
    for (let i = 0; i < firstNamesArray.length; i++)
    {
        nameList = firstNamesArray[i];
        console.log(nameList);
    }
    return nameList;
}
}
