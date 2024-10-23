import React from 'react'

const Header = () => {
  return (
    <div>
      <header>
            <div class="container">
    
                 <a id="logo" href="index.html"><img src="Link.svg" alt=""/></a>
    
                <nav id="main-menu" class="navbar">
                    <a class="nav-link" href="#">Features</a>
                </nav>
    
                <div id="darkmode-toggle-switch" class="btn-toggle-switch">
                    <span class="label">Dark mode</span>
                    <label for="Dark mode-switch" class="toggle-switch">
                        <input id="Dark mode-switch" type="checkbox"/>
                        <span class="slider round"></span>
    
                    </label>
                </div>
    
                <a id="auth-signin" href="#" class="btn-primary">
                    <i class="fa-thin fa-user-large"></i>
                    <span>Sign in / Up</span>
                </a>
    
                <button class="btn-mobile">
                    <i class="fa-regular fa-bars"></i>
                </button>
            
            
            </div> 
           


        </header>

    </div>
  )
}

export default Header