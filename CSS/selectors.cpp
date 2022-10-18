<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>css selectors</title>
    <!-- css selectors are used to select html element(s) styling  -->
    <!-- "Element Selctor" is used to select an element based off the tagmore   -->
    <!-- "Id Selector" is used to select an element with a given id   -->
    <!-- "Class Selector" is used to slect a class  -->
     <style>
        h1{
            color: red;
        }
      div{
          background-color: antiquewhite;
      }  
      #red{
          background-color: red;
      }
      .blue,h3{
          background-color: blue;
          color: azure;
          border: 6px solid black;
      }
      .green{
          background-color: rgb(17, 228, 17);
          color: blueviolet;
          border: 3px snow ;
      }
      *{
          padding: 0ch;
          margin: 0ch;
      }

    </style>
</head>
<body>
    <div>
        <p>
            <h1>this is my css selector page</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente mollitia dolorem amet in rerum similique ipsum animi veniam ut, quisquam perspiciatis necessitatibus incidunt maiores! Fugit nostrum eius magni itaque ratione maiores harum ipsa!
        </p>
        <h1>another h1 tag</h1>
        <div id="red">bg is red</div>
        <span class="blue">First tag</span>
        <span class="blue">Second tag</span>
        <span class="blue">Third tag</span>
        <h3>here is h3</h3>
        <p class="green">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis illum maxime perspiciatis dolorum voluptatem quis assumenda dolore earum repellendus. Eum minima ea, illo provident aliquid maxime dolorem expedita fugiat quae, quidem deleniti, at aperiam itaque aliquam nostrum delectus? Magni odit aliquid quis dolor iste temporibus impedit, sit vitae consequatur aperiam necessitatibus quod fuga, exercitationem quas!
        </p>
    </div>
    
</body>
</html>
