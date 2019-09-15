import React from 'react'
import M from "materialize-css";


export default class Navbar extends React.Component {

    componentDidMount() {
        var elems = document.querySelectorAll('.sidenav')
        M.Sidenav.init(elems, null)
    }

    render() {
        const styleAttributes = {
            height: "5.5vh",
            paddingTop:"1.5vh",
        }

        return (
            <div>
                <div className="navbar-fixed">
                    <nav>
                        <div className="nav-wrapper" style={{backgroundColor: '#461000'}}>
                            <div className="container">
                                <a href="../" class="brand-logo left"><img className="responsive-img hide-on-med-and-down" src="../logo.png" style={styleAttributes}/></a>
                                <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                                <ul id="nav-mobile" className="right hide-on-med-and-down">
                                    <li><a href="/loja/">Loja</a></li>
                                    <li><a href="/regras/">Info</a></li>
                                    <li><a href="/perfil/">Perfil</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <ul className="sidenav" id="mobile-demo">
                    <li><a href="/loja/">Loja</a></li>
                    <li><a href="/regras/">Info</a></li>
                    <li><a href="/perfil/">Perfil</a></li>
                </ul>
            </div>
        )
    }
}
