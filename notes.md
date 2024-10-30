# Angular Training Crash Course

## 5-Step Development Process
1. Create a new Project
```
ng new --no-standalone sales-project
# no for angular routing
# yes for css

ng serve --open
```

2. Update main template page
```
# open app.component.html
# clean up contents

```
 
3. Generate a new component
```
ng generate component sales-person-list
```
4. Add a new component selector to app template page
```
# open sales-person-list.component.ts
# copy the selector value
# open app.component.html, add the selector as a tag
```
5. Generate a model (e.g. SalesPerson) class
```
ng generate class sales-person-list/SalesPerson
# open the sales-person.ts
# define constructor with field properties as public param which auto-generates the field accessors
```
6. In the model's list component (e.g. SalesPersonListComponent), create a sample data
```
# open sales-person-list.component.ts
# create an array of objects for the model
salesPersonList: SalesPerson[] = [
  new SalesPerson("blah", "blah", 4000)
]

```
7. In the model's list template file (e.g. sales-person-list), build HTML table by looping over data
```
# open sales-person-list.component.html
# access/display some value from the model's list component (sales-person-list.component.ts)
{{ salesPersonList[0].firstName}}
```
