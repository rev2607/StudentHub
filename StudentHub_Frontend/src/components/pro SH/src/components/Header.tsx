import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <a href="/" className="logo">
          STUDENT HUB.IN
        </a>
        <nav>
          <ul className="nav-links">
            <li><a href="#colleges">Colleges</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#exams">Exams</a></li>
            <li><a href="#internships">Internships</a></li>
            <li><a href="#scholarships">Scholarships</a></li>
            <li><a href="#login" className="login-btn">Login</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
