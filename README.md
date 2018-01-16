# tripper

Outline of the project: 
The project goals are simple: We require a program that calculates the expenses for a group of students who like to go on road trips.

The group agrees in advance to share expenses equally, but it is not practical to share every expense as it occurs. Thus individuals in the group pay for particular things, such as meals, hotels, taxi rides, and plane tickets. After the trip, each student's expenses are tallied and money is exchanged so that the net cost to each is the same, to within one cent. In the past, this money exchange has been tedious and time consuming. Your job is to compute, from a list of students and their personal expenses from the trip, the minimum amount of money that must change hands in order to equalize (within one cent) all the students' costs.

So, for example, Louis, Carter, and David took a trip together; Louis incurred expenses of $5.75, $35.00, and $12.79, Carter paid out $12.00, $15.00, and $23.23, and David covered $10.00, $20.00, $38.41, and $45.00. Louis' total was $53.54, Carter's was $50.23, and David shelled out $113.41. The total cost of the trip was thus $217.18, and thus equal shares would be $72.39 1/3 cents. Therefore, Louis owes David $18.85, and Carter owes David $22.16.

The output should include each student's name, and how much each student needs to pay out to any others. For simplicity's sake, it is safe to assume three students, two of which pay much less than the third

# Notes

This project needed to use C# and React.js, so I decided to use ASP.NET Core for the API side.

# REQUIREMENTS
.NET Core 2.0 SDK: 
https://github.com/dotnet/core/blob/master/release-notes/download-archives/2.0.0-download.md
or https://www.microsoft.com/net/download/macos

Node.js ^9.3 : https://nodejs.org/en/ 

# Setup

```npm install```

# Run the application 
 
```
dotnet restore
dotnet run 
```

# Run the unit tests for the React components via Jest 
 
``` 
npm test 
```

