export default function Portfolio () {

    return (
        <div className="portfolio container">
        <section className="bg-white dark:bg-gray-900">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Ephemera</h2>
                    <h4 className="font-semibold">OVERVIEW</h4>
                    <p className="mb-4">Ephemera is a full-stack app built with React.js, Django, and Django Rest Framework. The app allows users to create and share posts in the form of haiku poems. It incorporates JWT authentication and local storage using  access and refresh tokens. Once logged-in, users have full CRUD capability on posts they create, and they can view the posts of other users. </p>
                    <div className="mb-4">
                        <ul className="font-semibold">HIGHLIGHTS</ul>
                        <li>Built with React.js, Django & Django Rest Framework</li>
                        <li>RESTful API & JSON data</li>
                        <li>JWT Authentication</li>
                        <li>React UseContext Hook</li>
                        <li>FlowBite Blocks &  React Components</li>
                        <li>Axios library for CRUD requests</li>
                    </div>
                    <div>
                    <h4 className="font-semibold">REPO</h4>
                    <a href="https://github.com/jasondcarmichael/ephemera_daily_haiku"  >Ephemera</a>
                    </div>
                </div>  
            </div>
        </section>

        <section className="bg-white dark:bg-gray-900">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Furniture Depot - Group Project</h2>
                    <h4 className="font-semibold">OVERVIEW</h4>
                    <p className="mb-4">Furniture Depot is an ecommerce full-stack PERN app. The app integrates user authentication with JWT web tokens. On the server side, Sequelize is used with Express as middleware for the SQL relational database. Users can visit the site to view products. Once logged-in, users can write product reviews for specified items. Registered users have full CRUD capability on reviews they write.</p>
                    <div className="mb-4">
                        <h4 className="font-semibold">ROLE</h4>
                        <p>This was a group project, and I conributed the following:</p>
                            <li>Project Planning</li>
                            <li>Backend: models, associations, routes, controllers</li>
                            <li>CSS: overall site styling</li>
                            <li>Troubleshooting frontend CRUD functionality</li>
                    </div>
                    <div className="mb-4">
                        <ul className="font-semibold">HIGHLIGHTS</ul>
                        <li>GitHub - Two repos for version control working with branches and merges</li>
                        <li>PERN Stack - PostgreSQL, Express, React, Node</li>
                        <li>JWT Authentication</li>
                        <li>Axios library for CRUD requests</li>
                    </div>
                    <div>
                    <h4 className="font-semibold">REPO</h4>
                    <span> <a href="https://github.com/FurnitureDepot-P3/Furniture-Depot-Front-End">Frontend</a> | 
                    <a href="https://github.com/FurnitureDepot-P3/Furniture-Depot-Backend">Backend</a>
                    </span>
                    </div>
                </div>  
            </div>
        </section>

        <section className="bg-white dark:bg-gray-900">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Current Bestsellers</h2>
                    <h4 className="font-semibold">OVERVIEW</h4>
                    <p className="mb-4">My first project using the React framework, Current Bestsellers is a sleek API extensive app that allows users to see what books are currently trending. The app, by means of the Axios library, makes requests to the New York Times Bestsellers Lists API. Functional components that make use of React Hooks such as UseState, UseEffect, and UseNavigate are the focus of this project. </p>
                    <div className="mb-4">
                        <ul className="font-semibold">HIGHLIGHTS</ul>
                        <li>Built with React.js</li>
                        <li>3rd Party Api - NY Times Bestselling Books Lists</li>
                        <li>React Hooks and ReactRouter DOM</li>
                        <li>Surge Deployment</li>
                    </div>
                    <div className="mb-4">
                    <h4 className="font-semibold">REPO</h4>
                    <a href="https://github.com/jasondcarmichael/current_bestselling_books">Current Bestelling Books</a>
                    </div>
                    <div>
                    <h4 className="font-semibold">DEPLOYED SITE</h4>
                    <a href="https://current-bestsellers.surge.sh/">Deployed Site</a>
                    </div>
                </div>  
            </div>
        </section>
        </div>
    )
}