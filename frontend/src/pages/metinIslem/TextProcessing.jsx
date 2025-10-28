import React, { useState } from "react";

const TextProcessing = () => {
  const [text, setText] = useState("");

  const toUpper = () => {
    setText(text.toUpperCase());
  };
  const toLower = () => {
    setText(text.toLowerCase());
  };
  const characterLength = () => {
    alert(text.length);
  };
  const removeSpaces = () => {
    setText(text.replace(/\s+/g, "").trim());
  };
  const reverseText = () => {
    setText(text.split("").reverse().join(""));
  };
  const copyText = () => {
    navigator.clipboard.writeText(text);
  }
  const getLoremIpsumText = () =>{
    setText(`Lorem Ipsum, kısaca Lipsum, masaüstü yayıncılık ve basın yayın sektöründe kullanılan taklit yazı bloku olarak tanımlanır.`)
  }
  const cleanTextArea = () =>{
    setText("");
  }

  return (
    <div>
      <div class="container mt-2">
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
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  ></textarea>
                </div>
                <div class="row g-3 mb-2">
                  <div class="col">
                    <button
                      class="btn btn-secondary btn-lg w-100"
                      onClick={toUpper}
                    >
                      BÜYÜK HARF
                    </button>
                  </div>
                  <div class="col">
                    <button
                      class="btn btn-secondary btn-lg w-100"
                      onClick={toLower}
                    >
                      küçük harf
                    </button>
                  </div>
                  <div class="col">
                    <button
                      class="btn btn-secondary btn-lg w-100"
                      onClick={characterLength}
                    >
                      Karakter Say
                    </button>
                  </div>
                </div>

                <div class="row g-3 mb-2">
                  <div class="col">
                    <button
                      class="btn btn-secondary btn-lg w-100"
                      onClick={reverseText}
                    >
                      Ters Çevir
                    </button>
                  </div>
                  <div class="col">
                    <button
                      class="btn btn-secondary btn-lg w-100"
                      onClick={removeSpaces}
                    >
                      Boşluk Temizle
                    </button>
                  </div>
                  <div class="col">
                    <button
                      class="btn btn-secondary btn-lg w-100"
                      onClick={copyText}
                    >
                      Metni Kopyala
                    </button>
                  </div>
                </div>
                <div class="row g-3">
                  <div class="col">
                    <button
                      class="btn btn-secondary btn-lg w-100"
                      onClick={getLoremIpsumText}
                    >
                      Lorem Ipsum
                    </button>
                  </div>
                  <div class="col">
                    <button
                      class="btn btn-danger btn-lg w-100"
                      onClick={cleanTextArea}
                    >
                      Temizle
                    </button>
                  </div>
                </div>`
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextProcessing;
