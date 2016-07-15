//Navbar Component
var Navbar = React.createClass({
    render: function () {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">SimpleReact</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li><a href="#">About</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
});

//Jumbotron Component
var Jumbotron = React.createClass({
    render: function () {
        return (
            <div>
                <div className="jumbotron">
                    <div className="container">
                        <h1>Hello, world!</h1>
                        <p>This is a template for a simple marketing or informational website. It includes a large callout called a
                            jumbotron and three supporting pieces of content. Use it as a starting point to create something more
                            unique.</p>
                        <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
                    </div>
                </div>
            </div>
        )
    }
});

//Home Page Component
var PageHome = React.createClass({
    render: function () {
        return (
            <div className="container">
                <div className="row">
                    <h1>Main Content</h1>
                </div>
            </div>
        )
    }
});

//Footer Component
var Footer = React.createClass({
    render: function () {
        return (
            <div className="container">
                <hr/>
                <footer>
                    <p>&copy; 2015 Company, Inc.</p>
                </footer>
            </div>
        )
    }
});

//Main App Component
var App = React.createClass({
    render: function () {
        return (
            <div>
                <Navbar />
                <Jumbotron />
                <PageHome />
                <Footer />
            </div>
        )
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('app')
);