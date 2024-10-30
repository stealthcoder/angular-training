
# 5-Step Development Process

## 01-angular-create-new-component-basic-html-table
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

## 02-angular-integrate-angular-and-bootstrap-table

- #1 Get links for remote Bootstrap files
  - visit [BootStrap](www.getbootstrap.com) Get Started instructions and copy
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  ```

- #2 Add links to index.html (inside head section)
  ```html
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  ```

- #3 Apply Bootstrap CSS styles in component HTML template
  ```html
  <div class="container">
    <h1 class="mt-3 mb-3">Sales Team</h1>
  ```
- #4 Apply Bootstrap CSS styles in component HTML table
  ```html
  <table class="table table-hover">
    <thead class="table-dark">
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Sales</th>
        </tr>
    </thead>
    <tbody>
  ```

- Update Typescript component file to reference Bootstrap HTML template (sales-person-list.component.ts)
  ```typescript
  @Component({
    selector: 'app-sales-person-list',
    // templateUrl: './sales-person-list.component.html',
    templateUrl: './sales-person-list-bootstrap.component.html',
    styleUrl: './sales-person-list.component.css'
  })
  ```