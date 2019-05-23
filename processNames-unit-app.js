module.exports = 
{
processAllEmployees: function ()
{   
    const employeesArray = 
    [{   
      name: ["Oscar Martinez", "Angela Martin", "Kevin Malone"],
      department: "Accounting"
    },
    {   
      name: ["Michael Scott", "Jim Halpert", "Dwight Schrute", "Andy Bernard", "Stanley Hudson", "Phyllis Vance"],
      department: "Sales" 
    },
    {   
      name: ["Toby Flenderson", "Holly Flax", "Gabe Lewis"],
      department: "Human Resources"
    },
    {   
      name: ["Ryan Howard", "Peter Miller", "Gabe Lewis"],
      department: "Temps and Interns"
    },
    {   
      name: ["Jan Levinson", "Robert California"],
      department: "Corporate"
    },
    {   
      name: ["Darryl Philbin", "Roy Anderson"],
      department: "Warehouse"
    },
    {   
      name: ["Pam Beezley", "Erin Hannon"],
      department: "Reception"
    },
    {   
      name: ["Creed Bratton", "Meredith Palmer", "Kelly Kapoor", "Clark Green"],
      department: "Support"
    }]; 

    for(var i = 0; i < employeesArray.length; i++)
    {
       let empDep = employeesArray[i].department;
         if (!(empDep == "Human Resources" || empDep == "Corporate"))
         {
              namesLeft = employeesArray[i].name;
         }   
    }
    return namesLeft;
}
}
