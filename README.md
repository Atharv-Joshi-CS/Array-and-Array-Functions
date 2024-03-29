# Title : Array and Array Functions

Use the employees array as you starting point for raw data.
Using the array, create a new array where each element is an instance of class Employee.

Once that new array is created it will act like your data source.

Write functions that will perform the following operation on the above array.

1. Find an employee with specific id. (id is the unique primary key for search)
eg findEmployeeById( id: "1"  ) should return a single object from the array that has "id = 1".

2. Find an employee information that matches the search object passed as an argument.
eg findEmployee( { name: "Employee Name" } ) should return a single object from the array that has "name = Employee Name". Assume that the search object passed into the function contains only those keys that are present in the Employee object.
restrict the search object to a single key value pair.  findEmployee( { name: "Employee Name" , company:"Company name" } )  would result into invalid search. ( :fire:  at some later point your api should be able to handle this query as well so write the code accordingly).

3. Update employee with a specific id
This function will take in arguments as id and an update object.
Update object will contain a key value pairs that needs to be updated. eg. { name:  "updated  name" }
 eg updateEmployeeById( id: "1", { update Object:  updated values }   ) should update a single object from the array that has "id=1".
Assume that the updateObject will contain keys that are present in the Employee object
Restrict updating key properties like id.

4. Delete an object with a specific id.
This function should take in an argument as id and delete the same from the array of Employees.


### Documentation :

The API has 4 functions :
1. findEmployeeById
    The input parameter is a employeeId (datatype : Number)
    Returns : 
        Employee Object if employeeId is valid and present in database.
        Empty array if employeeId is not found in database 

2. findEmployee
    The input parameter is a object (datatype : Object)
    Returns : 
        Employee Object if present in database.
        Empty array if not found in database 

3. updateEmployee
    The input parameter is a employeeId and updateObject (datatype : Number, Object)
    Returns : 
        Updated Employee Object if employeeId is valid and present in database.
        Empty array if employeeId is not found in database 

4. removeEmployee
    The input parameter is a employeeId (datatype : Number)
    Returns : 
        List of remaining employees   