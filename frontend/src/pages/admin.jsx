import React from 'react';
import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        <div>

        <div className="bg-dark text-white p-3" style={{ width: "250px" }}>
          <h4 className="text-center mb-4">Admin Panel</h4>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <Link to="/" className="nav-link text-white">
                🏠 Dashboard
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/commands" className="nav-link text-white">
                ⚙️ Komutlar
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link to="/settings" className="nav-link text-white">
                ⚡ Ayarlar
              </Link>
            </li>
          </ul>
        </div>
        </div>
    );
}

export default Admin;
