//Navbar Component
var Navbar = React.createClass({
    propTypes: {
        brand: React.PropTypes.string
    },
    getDefaultProps: function(){
        return{
            brand: 'SimpleReact',
            color: 'light'
        }
    },
    render: function(){
        if(this.props.color == 'dark'){
            var navClass = 'navbar navbar-inverse';
        }else if(this.props.color == 'light'){
            var navClass = 'navbar navbar-default';
        }

        var homeActive = '';
        var aboutActive = '';

        if(this.props.page == 'home'){
            homeActive = 'active';
        }else if(this.props.page == 'about'){
            aboutActive = 'active';
        }

        return (
            <div>
                <nav className={navClass}>
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">{this.props.brand}</a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li className={homeActive}><a onClick={this.props.homeClick} href="#">Home </a></li>
                                <li className={aboutActive}><a onClick={this.props.aboutClick} href="#">About</a></li>
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
    propTypes: {
        heading: React.PropTypes.string,
        text: React.PropTypes.string,
        link: React.PropTypes.string
    },
    getDefaultProps: function(){
        return{
            heading: 'Welcome!',
            text: 'Welcome to SimpleReact website buit with React Components',
            link: 'http://google.ca'
        }
    },
    render: function(){
        return (
            <div>
                <div className="jumbotron">
                    <div className="container">
                        <h1>Hello, {this.props.heading}</h1>
                        <p>{this.props.text}</p>
                        <p><a className="btn btn-primary btn-lg" href={this.props.link} target="_blank" role="button">Google</a></p>
                    </div>
                </div>
            </div>
        )
    }
});

//Home Page Component
var PageHome = React.createClass({
    render: function(){
        return (
            <div className="container">
                <div className="row">
                    <h1>Main Content</h1>
                </div>
            </div>
        )
    }
});

//About Page Component
var PageAbout = React.createClass({
    render: function(){
        return (
            <div className="container">
                <div className="row">
                    <h2 className="page-header">About Page</h2>
                    <p>Some Contents.......................</p>
                </div>
            </div>
        )
    }
});

//Footer Component
var Footer = React.createClass({
    getDefaultProps: function(){
        return {
            year: 2016,
            note: 'SampleReact Application.'
        }
    },
    render: function(){
        return (
            <div className="container">
                <hr/>
                <footer>
                    <p>Copyright &copy; {this.props.year}, {this.props.note}</p>
                </footer>
            </div>
        )
    }
});

//Main App Component
var App = React.createClass({
    getInitialState: function(){
        return{
            page: 'home'
        }
    },
    handleHomeClick: function(){
        this.setState({
            page: 'home'
        })
    },
    handleAboutClick: function(){
        this.setState({
            page: 'about'
        })
    },
    render: function(){
        if(this.state.page == 'home'){
            var jumbotron = <Jumbotron/>;
            var page = <PageHome/>;
        }else if(this.state.page == 'about'){
            var jumbotron = '';
            var page = <PageHome/>;
        }
        return (
            <div>
                <Navbar brand="SimpleReact" color="dark"
                        page={this.state.page}
                        homeClick={this.handleHomeClick}
                        aboutClick={this.handleAboutClick}/>
                {Jumbotron}
                {page}
                <Footer />
            </div>
        )
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('app')
);