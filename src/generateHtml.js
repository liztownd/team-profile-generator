//generates the html file

function generateCards(){
    employees.forEach(data => {
        if (data.role === "Manager"){
            return `
            <div class="card text-white m-3 float-left shadow " style="width: 18rem;">
            <div class="card-header bg-primary h5">${data.name}\n
                <i class="fas fa-mug-hot"></i>            
                Manager
            </div>
            <div class="card mx-auto my-4" style="width: 14rem;">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item text-dark">ID: ${data.id}</li>
                  <li class="list-group-item text-dark">Email: ${data.email}</li>
                  <li class="list-group-item text-dark">Office: ${data.officeNumber}</li>
                </ul>
              </div>
          </div>
    `
        }
        else if (data.role === "Engineer"){
            return `
            <div class="card text-white m-3 float-left shadow" style="width: 18rem;">
            <div class="card-header bg-primary h5">${data.name}\n
                <i class="fas fa-glasses"></i>
                Engineer
            </div>
            <div class="card mx-auto my-4" style="width: 14rem;">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item text-dark">ID: ${data.name}</li>
                  <li class="list-group-item text-dark">Email: ${data.email}</li>
                  <li class="list-group-item text-dark">GitHub: <a href = "https://www.github.com/${data.github}>${data.github}</a></li>
                </ul>
              </div>
          </div>
    
            `
        }
        else {
            return `
            <div class="card text-white m-3 float-left shadow" style="width: 18rem;">
            <div class="card-header bg-primary h5">${data.name}\n
                <i class="fas fa-user-graduate"></i>
                Intern
            </div>
            <div class="card mx-auto my-4" style="width: 14rem;">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item text-dark">ID: ${data.id}</li>
                  <li class="list-group-item text-dark">Email: ${data.email}</li>
                  <li class="list-group-item text-dark">School: ${data.school}</li>
                </ul>
              </div>
          </div>
    
            `
        }
    }
)};

function generateHtml(){
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employees</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/697aad430f.js" crossorigin="anonymous"></script>
</head>
<body>
<div class="container-fluid">
<div class="jumbotron jumbotron-fluid bg-danger">
  <div class="container">
    <h1 class="display-4 text-light text-center">My Team</h1>
  </div>
</div>

  <div class="container-lg mx-auto">

    ${generateCards(employees)}

    </div>
    </div>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-Piv4xVNRyMGpqkS2by6br4gNJ7DXjqk09RmUpJ8jgGtD7zP9yug3goQfGII0yAns" crossorigin="anonymous"></script>
</body>
</html>

    `
};

module.exports = generateHtml