import React from "react";

const TextProcessing = () => {
  return (
    <div>
      <div class="container mt-4">
        <div class="row justify-content-center">
          <div class="col-md-12">
            <div class="card text-center">
              <div class="card-body">
                <div className="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Metin Girişi
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="8"
                  ></textarea>
                </div>
                <div class="row g-3 mb-4">
                  <div class="col">
                    <a
                      href="/text-processing"
                      class="btn btn-secondary btn-lg w-100"
                      role="button"
                      aria-pressed="true"
                    >
                      BÜYÜK HARF
                    </a>
                  </div>
                  <div class="col">
                    <a
                      href="/text-processing"
                      class="btn btn-secondary btn-lg w-100"
                      role="button"
                      aria-pressed="true"
                    >
                      küçük harf
                    </a>
                  </div>
                  <div class="col">
                    <a
                      href="/text-processing"
                      class="btn btn-secondary btn-lg w-100"
                      role="button"
                      aria-pressed="true"
                    >
                      Karakter Say
                    </a>
                  </div>
                </div>
                <div class="row g-3 mb-4">
                  <div class="col">
                    <a
                      href="/text-processing"
                      class="btn btn-secondary btn-lg w-100"
                      role="button"
                      aria-pressed="true"
                    >
                      Kelime Say
                    </a>
                  </div>
                  <div class="col">
                    <a
                      href="/text-processing"
                      class="btn btn-secondary btn-lg w-100"
                      role="button"
                      aria-pressed="true"
                    >
                      Cümle / Paragraf
                    </a>
                  </div>
                  <div class="col">
                    <a
                      href="/text-processing"
                      class="btn btn-secondary btn-lg w-100"
                      role="button"
                      aria-pressed="true"
                    >
                      Başlık Format
                    </a>
                  </div>
                </div>
                <div class="row g-3 mb-4">
                  <div class="col">
                    <a
                      href="/text-processing"
                      class="btn btn-secondary btn-lg w-100"
                      role="button"
                      aria-pressed="true"
                    >
                      Ters Çevir
                    </a>
                  </div>
                  <div class="col">
                    <a
                      href="/text-processing"
                      class="btn btn-secondary btn-lg w-100"
                      role="button"
                      aria-pressed="true"
                    >
                      Boşluk Temizle
                    </a>
                  </div>
                  <div class="col">
                    <a
                      href="/text-processing"
                      class="btn btn-secondary btn-lg w-100"
                      role="button"
                      aria-pressed="true"
                    >
                      Metni Kopyala
                    </a>
                  </div>
                </div>
                <div class="row g-3">
                    <div class="col">
                    <a
                      href="/text-processing"
                      class="btn btn-secondary btn-lg w-100"
                      role="button"
                      aria-pressed="true"
                    >
                      Lorem Ipsum
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextProcessing;
