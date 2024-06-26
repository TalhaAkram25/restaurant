# restaurant-website
<h1>Project Documentation </h1>

<h2>Project Description</h2>

<p>This is a restaurant application where users can browse the restaurant's menu, contact the restaurant using a contact form, and make reservations by filling out a reservation form. The website includes pages such as About, Services, and Home, etc. It is responsive, meaning it can adjust its content according to the device's width.</p>

<h3>Frontend Folder Structure</h3>

<p>public folder contains all the images used in project</p>
<p>src folder contain two folders 'layouts' and 'pages'</p>
<p>layouts folder contain five files 'Navbar','Footer','Qualities','Reviews','WhoWeAre'. Navbar and Footer are called in 'App.jsx' and Qualities Reviews and WhoWeAre are called in 'Home.jsx'</p>
<p>pages folder contain seven files 'Home','About','Contact','OurMenu','Reservation','Services','Team'.these all are linked in navbar and there routes are in 'App.jsx'</p>

<h4>Front end url</h4>
<p>http://localhost:5173</p>

<h2>Frontend Screen Shots</h2>
<h4>Home page</h4>
<img src='./frontend/public/home5.PNG' />
<h4>About page</h4>
<img src='./frontend/public/aboutf.PNG' />
<h4>Contact page</h4>
<img src='./frontend/public/contact5.PNG'/>
<h4>Reservation page</h4>
<img src='./frontend/public/reserve5.PNG'/>
<h4>Service page</h4>
<img src='./frontend/public/service5.PNG'/>
<h4>Menu page</h4>
<img src='./frontend/public/menu1.PNG'/>



<h1>Backend Documentation</h1>

<h3>Backend Folder structure</h3>
<p>index.js file is starting point</p>
<p>config folder contains two files 'dotenv.env','mongodb.js'. All environment variables are in env file and database connection is written in mongodb.js file</p>
<p>routes folder contains two files 'conact-route.js' and 'reservation-route.js' contact and reservation routes are written in these files respectively. </p>
<p>controllers folder also contains two files 'contact-conroller.js' and 'reserve-controller.js' these files contains main logic of forms.</p>
<p>models Folder contains two files in which databse schema of contact and reservation forms are wriiten.</p>
<p>error folder contains error.js file from which errorhandling is being done</p>


<h3>Server Address</h3>
<p>http://localhost:4000 </p>

<h4>Api to send reservation</h4>
<p>Method: post</p>
<p>endPoint: /api/v1/reservation/send</p>

<h4>Api for contact form </h4>
<p>Method: post</p>
<p>endPoint: /api/v1/form/contact</p>

<h3>request response structure of reservation form</h3>

<table>
  <tr>
    <th>Request</th>
    <th>Response</th>
  </tr>
  <tr>
    <td>
        <pre>
            {
                "firstName": "Abdullah",
                "lastName": "Akram",
                "email": "abdullah45@gmail.com",
                "phone": "03225669768",
                "date": "12 04 24",
                "time": "12:45 pm"
            }
        </pre>
    </td>
    <td>
        <pre>
            {
                success: true
            }
        </pre>
    </td>
    
  </tr>
</table>

<h3>request response structure of contact form</h3>

<table>
  <tr>
    <th>Request</th>
    <th>Response</th>
  </tr>
  <tr>
    <td>
        <pre>
            {
                "username": "talha",
                "email": "talha56@gmail.com",
                "phone": "98765432109",
                "message": "hi, hello this is a message"
            }
        </pre>
    </td>
    <td>
        <pre>
            {
                success: true
            }
        </pre>
    </td>
    
  </tr>
</table>
