import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddCommand from "./pages/command/AddCommand";
import UploadPage from "./pages/video/UploadPage";
import WatchPage from "./pages/video/WatchPage";
import TextProcessing from "./pages/metinIslem/TextProcessing";
function App() {
  return (
    <Router>
      <div className="d-flex flex-column flex-md-row min-vh-100">
        {/* Sol Menü */}
        <aside
          className="bg-dark text-white p-3 d-flex flex-column"
          style={{ width: "250px", flexShrink: 0 }}
        >
          <h4 className="text-center mb-4">Admin Panel</h4>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a
                href="/text-processing"
                class="btn btn-secondary"
                role="button"
                aria-pressed="true"
              >
                Metin işleme
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="/text-processing"
                class="btn btn-secondary"
                role="button"
                aria-pressed="true"
              >
                Pdf işleme
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="/text-processing"
                class="btn btn-secondary"
                role="button"
                aria-pressed="true"
              >
                Görüntü dönüştürme
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                href="/commands"
                class="btn btn-secondary"
                role="button"
                aria-pressed="true"
              >
                Komut Ekleme
              </a>
            </li>
            <li className="nav-item mb-2">
              <div class="dropdown">
                <a
                  class="btn btn-secondary dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Video Streamming
                </a>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="/upload">
                    Upload Video
                  </a>
                  <a class="dropdown-item" href="/video">
                    Watch Video
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </aside>

        {/* Sağ İçerik */}
        <main className="flex-grow-1 p-4 bg-light overflow-auto">
          <div className="container-fluid">
            <Routes>
              <Route path="/commands" element={<AddCommand />} />
              <Route path="/text-processing" element={<TextProcessing />} />
              <Route path="/upload" element={<UploadPage />} />
              <Route path="/video/:id" element={<WatchPage />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
