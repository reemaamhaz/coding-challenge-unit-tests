module.exports = 
{
splitFullName: function () 
{   
    let names = ["Oscar Martinez", "Angela Martin", "Kevin Malone", "Michael Scott", "Jim Halpert", "Dwight Schrute", "Andy Bernard", "Stanley Hudson", "Phyllis Vance", "Ryan Howard", "Peter Miller", "Darryl Philbin", "Roy Anderson", "Pam Beezley", "Erin Hannon", "Creed Bratton", "Meredith Palmer", "Kelly Kapoor", "Clark Green"];
    let firstNamesArray = [];
    let lastNamesArray = [];

   for (var x = 0; x < names.length; x++)
   {
        fullName = names[x].split(" "),
        first = fullName.shift(),
        last = fullName.shift();

        firstNamesArray.push(first);
        lastNamesArray.push(last);
   }   
   return firstNamesArray;
} 
}
